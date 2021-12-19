import React from "react";
import { Collapsible,  CollapsibleItem } from "react-materialize";

import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";

// import ImageContainer from "../components/ImageContainer";

const userData = {
    firstName: "",
    lastName: "",

}

const Account = () => {
    return(
        <div className="animate__animated animate__fadeIn">
        <Header />
        <NavMobile />
        <div className="account-container animate__animated animate__fadeIn" id="account-container">
        <h1 className="account-header">Account</h1>
        <div className="account-info-container" id="account-info-container">
            <div id="account-info-name">Name</div>
                
            </div>
        </div>
        <NavDesktop />
        <Footer />
        </div>
    )
}

export default Account;