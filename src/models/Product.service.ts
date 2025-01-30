import { ProductStatus } from "../libs/enums/product.enum";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import {
  Product,
  ProductInput,
  ProductInquiry,
  ProductUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { T } from "../libs/types/common";
import {ObjectId} from "mongoose";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /** SPA */

  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.PROCESS };

    if (inquiry.productCollection)
      // POSTMAN orqali productCollection yuborilgan bo'lsa
      match.productCollection = inquiry.productCollection;
    if (inquiry.search) {
      // frondentdan search bo'lsa productname ichidan izlash logic
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 } // eng arzonidan boshlab yuqoriga
        : { [inquiry.order]: -1 }; // eng oxirgi qo'shilgandan pastga qarab

    const result = await this.productModel
      .aggregate([
        { $match: match }, // PROCESSda bo'lgan productlarnigina olib beradi
        { $sort: sort }, // dinamik holatda keyni olib beradi
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit }, // nechtadir malumotni o'tkazib yuborish,  ya'ni barcha malumotni olib ber
        { $limit: inquiry.limit * 1 }, // nechta ma'lumot kerakligi
      ])
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async getProduct(
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel
      .findOne({
        _id: productId,
        productStatus: ProductStatus.PROCESS,
      })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    // TODO: If authenticated users => first => view log creation
    // if (memberId) {
    //   //  Check Existence
    //   const input: ViewInput = {
    //     memberId: memberId,
    //     viewRefId: productId,
    //     viewGroup: ViewGroup.PRODUCT,
    //   };
    //   const existView = await this.viewService.checkViewExistence(input);

    //   console.log("exist:", !!existView);
    //   if (!existView) {
    //     // Insert View
    //     await this.viewService.insertMemberView(input);

    //     // Increase Counts
    //     const result2 = await this.productModel
    //       .findByIdAndUpdate(
    //         productId,
    //         { $inc: { productViews: +1 } },
    //         { new: true }
    //       )
    //       .exec();
    //   }
    // }
    return result;
  }

  /** SSR */

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async createNewPorduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("Errorm, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    // string => Object
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  }
}

export default ProductService;
