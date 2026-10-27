import type { CartItem } from '../types';
export class Cart {
  public static readonly FREE_SHIPPING_FROM = 100;
  public static readonly SHIPPING_COST = 10;
  public constructor(private readonly items: CartItem[], private readonly promoCode: string | null = null) {}
  public subtotal(): number { return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0); }
  public discount(): number { return this.promoCode === '10X10' ? this.subtotal() * .1 : 0; }
  public shipping(): number { return this.subtotal() === 0 || this.subtotal() >= Cart.FREE_SHIPPING_FROM ? 0 : Cart.SHIPPING_COST; }
  public total(): number { return Math.max(0, this.subtotal() - this.discount() + this.shipping()); }
}

