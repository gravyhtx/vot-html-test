import React from "react";
import './styles/style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserLogin from "./components/UserLogin";

import Home from "./components/Home"
import About from "./components/About"
import Faq from "./components/Faq"

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOrderPage from "./components/AdminOrderPage";
import AdminCreateDrop from "./components/AdminCreateDrop";



function App() {
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
        {/* SITE */}
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Faq />} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;