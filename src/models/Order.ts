import type { CartItem, CheckoutForm, Order as OrderData, OrderStatus } from '../types';
import { getOrderStatus } from '../utils/format';
export class OrderModel {
  public constructor(private readonly value: OrderData) {}
  public get status(): OrderStatus { return getOrderStatus(this.value); }
  public get data(): OrderData { return this.value; }
  public static create(items: CartItem[], checkout: CheckoutForm, total: number): OrderModel { return new OrderModel({ id: `10X-${Date.now().toString().slice(-6)}`, placedAt: new Date().toISOString(), items, checkout, total }); }
}

