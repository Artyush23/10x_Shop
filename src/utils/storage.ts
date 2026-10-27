export class StorageService<T> {
  public constructor(private readonly key: string) {}
  public get(): T | null { try { const raw = localStorage.getItem(this.key); return raw ? JSON.parse(raw) as T : null; } catch { return null; } }
  public set(value: T): void { localStorage.setItem(this.key, JSON.stringify(value)); }
  public remove(): void { localStorage.removeItem(this.key); }
}

export const cartStorage = new StorageService<import('../types').CartState>('shop_cart');
export const userStorage = new StorageService<import('../types').AuthUser>('shop_user');
export const orderStorage = new StorageService<import('../types').Order[]>('shop_orders');
export const profileStorage = new StorageService<{firstName:string;lastName:string;email:string;phone:string}>('shop_profile');

