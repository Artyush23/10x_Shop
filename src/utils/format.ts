export const formatPrice = (amount: number, currency = 'USD'): string => new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
export const discountedPrice = (price: number, pct: number): number => Math.max(0, price * (1 - pct / 100));
export const formatDate = (iso: string): string => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(iso));
export const getOrderStatus = (order: { placedAt: string }, now = new Date()): import('../types').OrderStatus => { const elapsed = now.getTime() - new Date(order.placedAt).getTime(); return elapsed < 60_000 ? 'Processing' : elapsed < 180_000 ? 'Shipped' : 'Delivered'; };

