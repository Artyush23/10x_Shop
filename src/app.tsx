import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, Layout, Loading, ProtectedRoute } from './components/AppShell';
import { AuthProvider, CartProvider, OrdersProvider, ThemeProvider } from './context/AppContext';
import './styles.css';

const CatalogPage = lazy(async () => ({ default: (await import('./pages/CatalogPage')).CatalogPage }));
const CartPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).CartPage }));
const CheckoutPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).CheckoutPage }));
const LoginPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).LoginPage }));
const NotFound = lazy(async () => ({ default: (await import('./pages/CommercePages')).NotFound }));
const OrderDetailsPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).OrderDetailsPage }));
const OrdersPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).OrdersPage }));
const ProductPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).ProductPage }));
const ProfilePage = lazy(async () => ({ default: (await import('./pages/CommercePages')).ProfilePage }));
const SignupPage = lazy(async () => ({ default: (await import('./pages/CommercePages')).SignupPage }));

function App(): React.ReactElement { return <ErrorBoundary><ThemeProvider><AuthProvider><CartProvider><OrdersProvider><Routes><Route element={<Layout/>}><Route path="/" element={<CatalogPage/>}/><Route path="/products/:id" element={<ProductPage/>}/><Route path="/cart" element={<CartPage/>}/><Route path="/checkout" element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>}/><Route path="/orders" element={<ProtectedRoute><OrdersPage/></ProtectedRoute>}/><Route path="/orders/:id" element={<ProtectedRoute><OrderDetailsPage/></ProtectedRoute>}/><Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/><Route path="*" element={<NotFound/>}/></Route><Route path="/login" element={<LoginPage/>}/><Route path="/signup" element={<SignupPage/>}/><Route path="/404" element={<Navigate to="/missing" replace/>}/></Routes></OrdersProvider></CartProvider></AuthProvider></ThemeProvider></ErrorBoundary>; }
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><Suspense fallback={<Loading/>}><App/></Suspense></BrowserRouter></React.StrictMode>);

