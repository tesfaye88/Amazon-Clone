import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
// import {  BrowserRouter, Routes ,Route} from "react-router"
import Payment from './Components/Pages/Payment/Payment'
import Auth from './Components/Pages/Auth/Auth'
import Landing from './Components/Pages/Landing/Landing'
import Orders from './Components/Pages/Orders/Orders'
import Cart from './Components/Pages/Cart/Cart'
import Results from './Components/Pages/Results/Results'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>


  )
}

export default Routing

