import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Routes } from "react-router"
import Payment from './Components/Pages/Payment/Payment'
import SignUp from './Components/Pages/Auth/SignUp'
import Landing from './Components/Pages/Landing/Landing'
import Orders from './Components/Pages/Orders/Orders'
import Cart from './Components/Pages/Cart/Cart'
import Results from './Components/Pages/Results/Results'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Router> 



  )
}

export default Routing

