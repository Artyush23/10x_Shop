import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, Layout, Loading, ProtectedRoute } from './components/AppShell';
import { AuthProvider, CartProvider, OrdersProvider, ThemeProvider } from './context/AppContext';
import { CatalogPage } from './pages/CatalogPage';
import { CartPage, CheckoutPage, LoginPage, NotFound, OrderDetailsPage, OrdersPage, ProductPage, ProfilePage, SignupPage } from './pages/CommercePages';
import './styles.css';

function App(): React.ReactElement { return <ErrorBoundary><ThemeProvider><AuthProvider><CartProvider><OrdersProvider><Routes><Route element={<Layout/>}><Route path="/" element={<CatalogPage/>}/><Route path="/products/:id" element={<ProductPage/>}/><Route path="/cart" element={<CartPage/>}/><Route path="/checkout" element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>}/><Route path="/orders" element={<ProtectedRoute><OrdersPage/></ProtectedRoute>}/><Route path="/orders/:id" element={<ProtectedRoute><OrderDetailsPage/></ProtectedRoute>}/><Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/><Route path="*" element={<NotFound/>}/></Route><Route path="/login" element={<LoginPage/>}/><Route path="/signup" element={<SignupPage/>}/><Route path="/404" element={<Navigate to="/missing" replace/>}/></Routes></OrdersProvider></CartProvider></AuthProvider></ThemeProvider></ErrorBoundary>; }
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><Suspense fallback={<Loading/>}><App/></Suspense></BrowserRouter></React.StrictMode>);

