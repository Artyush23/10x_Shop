export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  brand?: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
  reviews?: Review[];
}

export interface ProductsResponse { products: Product[]; total: number; skip: number; limit: number; }
export interface Category { slug: string; name: string; url: string; }
export interface AuthUser { username: string; isLoggedIn: boolean; }
export interface LoginFormValues { username: string; password: string; }
export interface CheckoutForm { fullName: string; email: string; address: string; city: string; }
export interface CartItem { product: Product; quantity: number; }
export interface CartState { items: CartItem[]; promoCode: string | null; }
export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered';
export interface Order { id: string; placedAt: string; items: CartItem[]; checkout: CheckoutForm; total: number; }
export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';
export type AsyncState<T> = { status: 'idle' | 'loading' | 'success' | 'error'; data: T | null; error: string | null };

