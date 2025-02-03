import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const orderSchema = new Schema(
  {
    orderTotal: {
      type: Number,
      required: true, // bo'lishi shart bo'lgan ma'lumot
    },

    orderDelivery: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      enum: OrderStatus,
      default: OrderStatus.PAUSE,
    },

    memberId: {
      // orderlarni hosil qilayotgan member
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member",
    },
  },
  { timestamps: true, collection: "orders" } 
  // timestamps: true => avtomatik ravishda createdAt va updatedAt maydonlarini qo‘shadi.
);

export default mongoose.model("Order", orderSchema);
