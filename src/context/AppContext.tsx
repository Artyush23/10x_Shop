import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import type { AuthUser, CartState, CheckoutForm, Order, Product } from '../types';
import { cartStorage, orderStorage, profileStorage, userStorage } from '../utils/storage';
import { Cart } from '../models/Cart';
import { OrderModel } from '../models/Order';

type CartAction = { type: 'ADD_ITEM'; product: Product; quantity?: number } | { type: 'SET_QUANTITY'; id: number; quantity: number } | { type: 'REMOVE_ITEM'; id: number } | { type: 'SET_PROMO'; code: string | null } | { type: 'CLEAR' };
const initialCart: CartState = cartStorage.get() ?? { items: [], promoCode: null };
function cartReducer(state: CartState, action: CartAction): CartState { switch (action.type) { case 'ADD_ITEM': { const current = state.items.find(x => x.product.id === action.product.id); const quantity = Math.min(action.product.stock, (current?.quantity ?? 0) + (action.quantity ?? 1)); return { ...state, items: current ? state.items.map(x => x.product.id === action.product.id ? { ...x, quantity } : x) : [...state.items, { product: action.product, quantity }] }; } case 'SET_QUANTITY': return { ...state, items: state.items.map(x => x.product.id === action.id ? { ...x, quantity: Math.max(1, Math.min(x.product.stock, action.quantity)) } : x) }; case 'REMOVE_ITEM': return { ...state, items: state.items.filter(x => x.product.id !== action.id) }; case 'SET_PROMO': return { ...state, promoCode: action.code }; case 'CLEAR': return { items: [], promoCode: null }; default: return state; } }

interface CartContextValue { state: CartState; add: (product: Product, quantity?: number) => void; setQuantity: (id: number, quantity: number) => void; remove: (id: number) => void; applyPromo: (code: string) => boolean; clear: () => void; count: number; cart: Cart; }
const CartContext = createContext<CartContextValue | undefined>(undefined);
export function CartProvider({ children }: { children: React.ReactNode }) { const [state, dispatch] = useReducer(cartReducer, initialCart); useEffect(() => cartStorage.set(state), [state]); const value = useMemo<CartContextValue>(() => ({ state, add: (product, quantity) => dispatch({ type: 'ADD_ITEM', product, quantity }), setQuantity: (id, quantity) => dispatch({ type: 'SET_QUANTITY', id, quantity }), remove: id => dispatch({ type: 'REMOVE_ITEM', id }), applyPromo: code => { const valid = code.trim().toUpperCase() === '10X10'; dispatch({ type: 'SET_PROMO', code: valid ? '10X10' : null }); return valid; }, clear: () => dispatch({ type: 'CLEAR' }), count: state.items.reduce((sum, item) => sum + item.quantity, 0), cart: new Cart(state.items, state.promoCode) }), [state]); return <CartContext.Provider value={value}>{children}</CartContext.Provider>; }
export function useCart(): CartContextValue { const value = useContext(CartContext); if (!value) throw new Error('useCart must be used inside CartProvider'); return value; }

interface AuthContextValue { user: AuthUser; login: (username: string) => void; logout: () => void; }
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
export function AuthProvider({ children }: { children: React.ReactNode }) { const [user, setUser] = useState<AuthUser>(userStorage.get() ?? { username: '', isLoggedIn: false }); useEffect(() => userStorage.set(user), [user]); const value = { user, login: (username: string) => setUser({ username, isLoggedIn: true }), logout: () => setUser({ username: '', isLoggedIn: false }) }; return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; }
export function useAuth(): AuthContextValue { const value = useContext(AuthContext); if (!value) throw new Error('useAuth must be used inside AuthProvider'); return value; }

interface OrdersContextValue { orders: Order[]; createOrder: (checkout: CheckoutForm) => Order; clearOrders: () => void; }
const OrdersContext = createContext<OrdersContextValue | undefined>(undefined);
export function OrdersProvider({ children }: { children: React.ReactNode }) { const [orders, setOrders] = useState<Order[]>(orderStorage.get() ?? []); useEffect(() => orderStorage.set(orders), [orders]); const { state, cart, clear } = useCart(); const createOrder = (checkout: CheckoutForm) => { const order = OrderModel.create(state.items, checkout, cart.total()).data; setOrders(current => [order, ...current]); clear(); return order; }; return <OrdersContext.Provider value={{ orders, createOrder, clearOrders: () => setOrders([]) }}>{children}</OrdersContext.Provider>; }
export function useOrders(): OrdersContextValue { const value = useContext(OrdersContext); if (!value) throw new Error('useOrders must be used inside OrdersProvider'); return value; }

interface ThemeContextValue { dark: boolean; toggle: () => void; }
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) { const [dark, setDark] = useState(() => localStorage.getItem('shop_theme') === 'dark'); useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('shop_theme', dark ? 'dark' : 'light'); }, [dark]); return <ThemeContext.Provider value={{ dark, toggle: () => setDark(value => !value) }}>{children}</ThemeContext.Provider>; }
export function useTheme(): ThemeContextValue { const value = useContext(ThemeContext); if (!value) throw new Error('useTheme must be used inside ThemeProvider'); return value; }

export function clearLocalData(): void { cartStorage.remove(); orderStorage.remove(); profileStorage.remove(); }

