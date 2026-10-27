import type { Category, Product, ProductsResponse } from '../types';
export class ApiError extends Error { public constructor(public readonly status: number, message: string) { super(message); this.name = 'ApiError'; } }
export class ApiClient {
  public constructor(private readonly baseUrl = 'https://dummyjson.com') {}
  private async request<T>(path: string, signal?: AbortSignal): Promise<T> { const response = await fetch(`${this.baseUrl}${path}`, { signal }); if (!response.ok) throw new ApiError(response.status, `Request failed (${response.status})`); return await response.json() as T; }
  public getProducts(params: string, signal?: AbortSignal): Promise<ProductsResponse> { return this.request<ProductsResponse>(`/products${params}`, signal); }
  public getProduct(id: string, signal?: AbortSignal): Promise<Product> { return this.request<Product>(`/products/${id}`, signal); }
  public getCategories(signal?: AbortSignal): Promise<Category[]> { return this.request<Category[]>('/products/categories', signal); }
  public getCategory(slug: string, params: string, signal?: AbortSignal): Promise<ProductsResponse> { return this.request<ProductsResponse>(`/products/category/${encodeURIComponent(slug)}${params}`, signal); }
}
export const api = new ApiClient();

