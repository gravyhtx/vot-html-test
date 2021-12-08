import React from "react";
import './styles/style.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import UserLogin from "./pages/UserLogin";
import UserRegistration from "./pages/UserRegistration";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Faq from "./pages/Faq";

import PageNotFound from "./pages/404.js"

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOrderPage from "./components/AdminOrderPage";
import AdminCreateDrop from "./components/AdminCreateDrop";



function App() {

  const website = {
    name: "Village of Thousands",
    drop: "001",
    szn: "Winter 2021"
  }
  

  return (
    <div className="App">
      <Router>
        <Switch>
        {/* ADMIN */}
          <Route path="/admin/login" exact component={() => <AdminLogin website={website} />} />
          <Route path="/admin/dashboard" exact component={() => <AdminDashboard website={website} />} />
          <Route path="/admin/orders" exact component={() => <AdminOrderPage website={website} />} />
          <Route path="/admin/drop" exact component={() => <AdminCreateDrop website={website} />} />
        {/* USERS */}
          <Route path="/login" exact component={() => <UserLogin website={website} />} />
          <Route path="/complete-signup" exact component={() => <UserRegistration website={website} />} />
        {/* SITE */}
          <Route path="/" exact component={() => <Home website={website} />} />
          <Route path="/products" exact component={() => <ProductsPage website={website} />} />
          <Route path="/about" exact component={() => <About website={website} />} />
          <Route path="/faq" exact component={() => <Faq website={website} />} />
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