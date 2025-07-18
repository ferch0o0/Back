
import { Document, model, Schema, Types } from 'mongoose';

export interface IOrder extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  subtotal: number;
  total: number;
  createDate: Date;
  status: 'pendiente' | 'pagado' | 'cancelado';
}

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subtotal: { type: Number, required: true },
  total: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pendiente', 'pagado', 'cancelado'], default: 'pendiente' }
});

export const Order = model<IOrder>('Order', orderSchema, 'order');