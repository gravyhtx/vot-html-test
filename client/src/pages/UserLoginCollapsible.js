import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize'
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavMobile from '../components/NavMobile';
import NavDesktop from '../components/NavDesktop';
import Login from '../components/Login';
import Register from '../components/Register';
import RandomQuote from '../components/modules/RandomQuote';

const UserLoginCollapsible = () =>  {
    return (
        <div className="user-login-container">
            <Header />
            <NavMobile />
            <div className="yuge-spacer"></div>
            <div className="row container signup-container animate__animated animate__fadeIn login-container">
                <Collapsible
                    accordion
                >
                    <CollapsibleItem
                        expanded={true}
                        header={<div className="login-header disable-highlight">Login</div>}
                    >
                        <Login />
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header={<div className="login-header disable-highlight">Register</div>}
                        // className="black"
                    >
                        <Register />
                    </CollapsibleItem>
                </Collapsible>
                <div className="big-spacer" />
                <div className="center-text italics"><RandomQuote className="center-text login-zen" type="zen" /></div>
                <br/><br/>
            </div>
            <NavDesktop />
            <Footer />
        </div>
    )
}

export default UserLoginCollapsible;