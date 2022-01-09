import React, { useEffect } from "react";
import './styles/style.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import UserMnemonic from "./pages/UserMnemonic";
import UserRegistration from "./pages/UserRegistration";
import Account from "./pages/Account";
import UserRecoverPassword from "./pages/UserRecoverPassword";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Faq from "./pages/Faq";
import FaqActive from "./pages/FaqActive";
import Policy from "./pages/Policy";
import Cart from "./pages/Cart";

import PageNotFound from "./pages/404"

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOrderPage from "./components/AdminOrderPage";
import AdminCreateDrop from "./components/AdminCreateDrop";

// import SendEmail from "./pages/SendEmail";


function App() {

  const website = {
    name: process.env.REACT_APP_COMPANY_NAME,
    domain: process.env.REACT_APP_DOMAIN,
    drop: process.env.REACT_APP_CURRENT_DROP,
    szn: process.env.REACT_APP_CURRENT_SZN,
    hCaptchaKey: process.env.REACT_APP_HCAPTCHA_SITE_KEY,
    hCaptchaSecret: process.env.REACT_APP_HCAPTCHA_SECRET
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  document.onload = scrollToTop()

  // document.addEventListener('load', scrollToTop());
  // var rootElement = document.documentElement
  // function handleScroll() {
  //   var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  //   if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
  //   // Show button
  //     scrollToTopBtn.classList.add("showBtn")
  //   } else {
  //     // Hide button
  //     scrollToTopBtn.classList.remove("showBtn")
  //   }
  // }
  

  return (
    <div className="App">
      <Router>
        <Switch>
        {/* ADMIN */}
          <Route path="/admin/login" exact component={() => <AdminLogin website={website} />} />
          <Route path="/admin/dashboard" exact component={() => <AdminDashboard website={website} />} />
          <Route path="/admin/orders" exact component={() => <AdminOrderPage website={website} />} />
          <Route path="/admin/drop" exact component={() => <AdminCreateDrop website={website} />} />
          {/* <Route path="/admin/send-email" exact component={() => <SendEmail website={website} />} /> */}
        {/* USERS */}
          <Route path="/login" exact component={() => <UserLogin website={website} />} />
          <Route path="/register" exact component={() => <UserRegister website={website} />} />
          <Route path="/signup-1" exact component={() => <UserMnemonic website={website} />} />
          <Route path="/signup-2" exact component={() => <UserRegistration website={website} />} />
          <Route path="/account" exact component={() => <Account website={website} />} />
          <Route path="/recover-password" exact component={() => <UserRecoverPassword website={website} />} />
        {/* SITE */}
          <Route path="/" exact component={() => <Home website={website} />} />
          <Route path="/products" exact component={() => <ProductsPage website={website} />} />
          {/* <Route path="/about" exact component={() => <About website={website} />} /> */}
          <Route path="/faq" exact component={() => <Faq website={website} />} />
          <Route path="/faq/active" exact component={() => <FaqActive website={website} />} />
          <Route path="/shipping" exact component={() => <FaqActive website={website} />} />
        {/* CART/CHECKOUT */}
          <Route path="/cart" exact component={() => <Cart website={website} />} />
        {/* QR */}
          <Route exact path="/qr">
            <Redirect to="/" />
          </Route>
        {/* 404 */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;