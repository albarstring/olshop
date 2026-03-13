import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AIAssistant from '@/pages/AIAssistant'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Orders from '@/pages/Orders'
import ProductDetail from '@/pages/ProductDetail'
import Products from '@/pages/Products'
import Profile from '@/pages/Profile'
import Register from '@/pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
