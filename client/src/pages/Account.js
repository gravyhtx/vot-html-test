import React from "react";
import { Button } from "react-materialize";

import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import BlockiesIdenticon from "../components/BlockiesIdenticon"

// import ImageContainer from "../components/ImageContainer";

const Account = ( userData ) => {
    return(
        <div className="animate__animated animate__fadeIn center">
        <Header />
        <NavMobile />
        <div className="account-container animate__animated animate__fadeIn" id="account-container">
        <h1 className="account-header">Account</h1>
        <div className="account-info-container" id="account-info-container">
        <BlockiesIdenticon className="blockie-nav" opts={{seed: "foobafdsafr"}}/>
            <div id="account-info-name">Name</div>
                
            </div>
            <Button
                node="button"
                style={{
                marginRight: '5px',
                width: '250px'
                }}
                waves="light"
                className="account-wallet-btn"
            >
                ADD WALLET
            </Button>
        </div>
        <Button
            node="button"
            style={{
            marginRight: '5px',
            width: '250px'
            }}
            waves="light"
            className="logout-btn"
        >
            LOG OUT
        </Button>
        <NavDesktop />
        <Footer />
        </div>
    )
}

export default Account;