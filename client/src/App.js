import React from "react";
import './styles/style.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import UserLogin from "./pages/UserLoginCollapsible";
import UserRegistration from "./pages/UserRegistration";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import About from "./components/About";
import Faq from "./components/Faq";

import PageNotFound from "./pages/404.js"

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOrderPage from "./components/AdminOrderPage";
import AdminCreateDrop from "./components/AdminCreateDrop";



function App() {

  const drop = "001";
  const szn = "Winter 2021"

  return (
    <div className="App">
      <Router>
        <Switch>
        {/* ADMIN */}
          <Route path="/admin/login" exact component={() => <AdminLogin />} />
          <Route path="/admin/dashboard" exact component={() => <AdminDashboard />} />
          <Route path="/admin/orders" exact component={() => <AdminOrderPage />} />
          <Route path="/admin/drop" exact component={() => <AdminCreateDrop />} />
        {/* USERS */}
          <Route path="/login" exact component={() => <UserLogin />} />
          <Route path="/complete-signup" exact component={() => <UserRegistration />} />
        {/* SITE */}
          <Route path="/" exact component={() => <Home />} />
          <Route path="/products" exact component={() => <ProductsPage drop={drop} szn={szn} />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Faq />} />
        {/* QR Redirect */}
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