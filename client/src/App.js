// import logo from './logo.svg';
// import './App.css';
import './styles/style.css'
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavBar, Footer, Home, About, Faq } from "./components";
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Faq from "./components/Faq"
import NavMobile from "./components/NavMobile"
import NavDesktop from "./components/NavDesktop"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <NavMobile /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Faq />} />
        </Switch>
        <NavDesktop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;