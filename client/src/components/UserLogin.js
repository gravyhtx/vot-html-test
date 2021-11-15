import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import NavDesktop from "./NavDesktop";
import Login from './modules/Login';
import Register from './modules/Register';

const UserLogin = () =>  {
    return (
        <div className="user-login-container">
            <Header />
            <div className="row signup-container">
                <div className="container col s6 signup-col">
                    <Login />
                </div>
                <div className="container col s6 signup-col">
                    <Register />
                </div>
            </div>
            <NavDesktop />
            <Footer />
        </div>
    )
}

export default UserLogin;