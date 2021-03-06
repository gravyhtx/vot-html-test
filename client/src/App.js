// import React, { useState, useEffect } from "react";
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import UserMnemonic from "./pages/UserMnemonic";
import UserRegistration from "./pages/UserRegistration";
import Account from "./pages/Account";
import UserRecoverPassword from "./pages/UserRecoverPassword";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
// import About from "./pages/About";
import Faq from "./pages/Faq";
import FaqActive from "./pages/FaqActive";
// import Policy from "./pages/Policy";
import Cart from "./pages/Cart";

import PageNotFound from "./pages/404"

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOrderPage from "./components/AdminOrderPage";
import AdminCreateDrop from "./components/AdminCreateDrop";

// import SendEmail from "./pages/SendEmail";


function App() {

  const website = {
    name: process.env.REACT_APP_COMPANY_NAME || "Village of Thousands",
    domain: process.env.REACT_APP_DOMAIN || "villageofthousands.io",
    drop: process.env.REACT_APP_CURRENT_DROP || 1,
    szn: process.env.REACT_APP_CURRENT_SZN || "Winter 2022",
    hCaptchaKey: process.env.REACT_APP_HCAPTCHA_SITE_KEY || "",
    hCaptchaSecret: process.env.REACT_APP_HCAPTCHA_SECRET || ""
  }

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
        {/* ADMIN */}
          <Route path="/admin/login" exact element={<AdminLogin website={website} />} />
          <Route path="/admin/dashboard" exact element={<AdminDashboard website={website} />} />
          <Route path="/admin/orders" exact element={<AdminOrderPage website={website} />} />
          <Route path="/admin/drop" exact element={<AdminCreateDrop website={website} />} />
          {/* <Route path="/admin/send-email" exact element={<SendEmail website={website} />} /> */}
        {/* USERS */}
          <Route path="/login" exact element={<UserLogin website={website} />} />
          <Route path="/register" exact element={<UserRegister website={website} />} />
          <Route path="/signup-1" exact element={<UserMnemonic website={website} />} />
          <Route path="/signup-2" exact element={<UserRegistration website={website} />} />
          <Route path="/account" exact element={<Account website={website} />} />
          <Route path="/recover-password" exact element={<UserRecoverPassword website={website} />} />
        {/* SITE */}
          <Route path="/" exact element={<Home website={website} />} />
          <Route path="/products" exact element={<ProductsPage website={website} />} />
          {/* <Route path="/about" exact element={<About website={website} />} /> */}
          <Route path="/faq" exact element={<Faq website={website} />} />
          <Route path="/faq/active" exact element={<FaqActive website={website} />} />
          <Route path="/shipping" exact element={<FaqActive website={website} />} />
        {/* CART/CHECKOUT */}
          <Route path="/cart" exact element={<Cart website={website} />} />
        {/* QR */}
          {/* <Route exact path="/qr">
            <Redirect to="/" />
          </Route> */}
        {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;