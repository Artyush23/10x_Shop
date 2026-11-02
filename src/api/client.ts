import type { Category, Product, ProductsResponse } from '../types';
export class ApiError extends Error { public constructor(public readonly status: number, message: string) { super(message); this.name = 'ApiError'; } }
export class ApiClient {
  public constructor(private readonly baseUrl = 'https://dummyjson.com') {}
  private async request<T>(path: string, signal?: AbortSignal): Promise<T> { const timeout = new AbortController(); const timer = window.setTimeout(() => timeout.abort(), 10_000); const onAbort = () => timeout.abort(); signal?.addEventListener('abort', onAbort, { once: true }); try { const response = await fetch(`${this.baseUrl}${path}`, { signal: timeout.signal }); if (!response.ok) throw new ApiError(response.status, `Request failed (${response.status})`); return await response.json() as T; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError' && signal?.aborted) throw error; if (error instanceof DOMException && error.name === 'AbortError') throw new ApiError(408, 'The request timed out.'); throw error; } finally { window.clearTimeout(timer); signal?.removeEventListener('abort', onAbort); } }
  public getProducts(params: string, signal?: AbortSignal): Promise<ProductsResponse> { return this.request<ProductsResponse>(`/products${params}`, signal); }
  public getProduct(id: string, signal?: AbortSignal): Promise<Product> { return this.request<Product>(`/products/${id}`, signal); }
  public getCategories(signal?: AbortSignal): Promise<Category[]> { return this.request<Category[]>('/products/categories', signal); }
  public getCategory(slug: string, params: string, signal?: AbortSignal): Promise<ProductsResponse> { return this.request<ProductsResponse>(`/products/category/${encodeURIComponent(slug)}${params}`, signal); }
}
export const api = new ApiClient();

