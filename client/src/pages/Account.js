import React from "react";
import { Button } from "react-materialize";

import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import AccountContainer from "../components/AccountContainer";

import Auth from '../utils/auth';


const Account = () => {

    return(
        <div className="animate__animated animate__fadeIn center">
        <Header />
        <NavMobile />
        <div className="account">
        <h1 className="account-header">Account</h1>
        <AccountContainer />
        <Button
            node="button"
            style={{
                width: '250px'
            }}
            waves="light"
            className="logout-btn"
            onClick={Auth.logout}
        >
            LOG OUT
        </Button>
        </div>
        <NavDesktop />
        <Footer />
        </div>
    )
}

export default Account;