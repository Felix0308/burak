import OrderItemModel from "../schema/OrderItem.model";
import OrderModel from "../schema/Order.model";
import { Member } from "../libs/types/member";
import {
  Order,
  OrderInquiry,
  OrderItemInput,
  OrderUpdateInput,
} from "../libs/types/order";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { ObjectId } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";
import MemberService from "./Member.service";

class OrderService {
  private readonly orderModel;
  private readonly orderItemModel;
  private readonly memberService;

  constructor() {
    this.orderModel = OrderModel;
    this.orderItemModel = OrderItemModel;
    this.memberService = new MemberService();
  }

  public async createOrder(
    member: Member,
    input: OrderItemInput[]
  ): Promise<Order> {
    // console.log("input:", input);
    const memberId = shapeIntoMongooseObjectId(member._id);
    const amount = input.reduce((accumulator: number, item: OrderItemInput) => {
      return accumulator + item.itemPrice * item.itemQuantity;
    }, 0);
    const delivery = amount < 100 ? 5 : 0;  
    // agar harid 100 dan kam bo'lsa dastafka mavjud(5$), 
    // agar harid 100 dan oshsa dastafka tekin qilib berish logici 
    
    // console.log("values:", amount, delivery);

    try {
      const newOrder: Order = await this.orderModel.create({
        orderTotal: amount + delivery,
        orderDelivery: delivery,
        memberId: memberId,
      });

      //   console.log("orderId:", newOrder._id);
      // TODO: create order items
      const orderId = newOrder._id;
      console.log("orderId:", orderId);
      await this.recordOrderItem(orderId, input);

      return newOrder;
    } catch (err) {
      console.log("Error, model:createOrder:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  private async recordOrderItem(
    orderId: ObjectId,
    input: OrderItemInput[]
  ): Promise<void> {
    const promisedList = input.map(async (item: OrderItemInput) => {
      item.orderId = orderId;
      item.productId = shapeIntoMongooseObjectId(item.productId);
      await this.orderItemModel.create(item);
      return "INSERTED";
    });

    console.log("promisedList:", promisedList);

    const orderItemState = await Promise.all(promisedList);
    console.log("orserItemsState:", orderItemState);
  }

  public async getMyOrders(
    member: Member,
    inquiry: OrderInquiry
  ): Promise<Order[]> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const matches = { memberId: memberId, orderStatus: inquiry.orderStatus };

    const result = await this.orderModel
      .aggregate([
        { $match: matches },
        { $sort: { updatedAt: -1 } },
        { $skip: (inquiry.page - 1) * inquiry.limit },
        { $limit: inquiry.limit },
        {
          $lookup: {
            // aggregate da topilgan mahsulotni har bittasini ichida iteration qilish imkonini beradi
            // har bitta iteration qilganda boshqa collectionga borib ma'lumotlarni topib berish imkoniyatini beradi.
            from: "orderItems", // qaysi collectiondan lookup qilishi
            localField: "_id", // qanaday qiymatni lookup qilishi
            foreignField: "orderId", // boshqa collectionda qatnashgan orderId datasetni valuesiga teng bo'lgan holatni topib beradi.
            as: "orderItems", // orderItems nomi ostida saqlab beradi
          },
        },
        {
          $lookup: {
            from: "products", // products dan izlaydi
            localField: "orderItems.productId", // nimadan iborat
            foreignField: "_id", // qaysi nom bilan izlashi
            as: "productData", // shu nom bilan saqlaydi
          },
        },
      ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async updateOrder(
    member: Member,
    input: OrderUpdateInput
  ): Promise<Order> {
    const memberId = shapeIntoMongooseObjectId(member._id),
      orderId = shapeIntoMongooseObjectId(input.orderId),
      orderStatus = input.orderStatus;

    const result = await this.orderModel
      .findOneAndUpdate(
        {
          memberId: memberId,
          _id: orderId,
        },
        { orderStatus: orderStatus },
        { new: true }
      )
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    // orderStatus PAUSE => PROCESS +1
    if (orderStatus === OrderStatus.PROCESS) {
      await this.memberService.addUserPoint(member, 1); // (member, 1)/(member, +1) => qaysi member ekanligi va pointini 1 ga oshirish logic
    }
    return result;
  }
}

export default OrderService;
