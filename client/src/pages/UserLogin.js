import React from 'react';
// import { Collapsible, CollapsibleItem } from 'react-materialize'
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavDesktop from '../components/NavDesktop';
import Login from '../components/Login';
import Register from '../components/Register';

const UserLogin = () =>  {
    return (
        <div className="user-login-container">
            <Header />
            <div className="big-spacer"></div>
            <div className="row signup-container animate__animated animate__fadeIn">
                
                <div className="container col s12 m6 signup-col">
                    <Login />
                </div>
                <div className="container col s12 m6 signup-col">
                    <Register />
                </div>
            </div>
            <NavDesktop />
            <Footer />
        </div>
    )
}

export default UserLogin;