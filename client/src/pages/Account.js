import React, {useState, useEffect} from "react";
import { Button } from "react-materialize";

import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import BlockiesIdenticon from "../components/BlockiesIdenticon"

import Auth from '../utils/auth';
// import ImageContainer from "../components/ImageContainer";

import {getSingleUser} from '../utils/API';

const Account = () => {
    const [userData, setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if(!token) {
                    window.location.assign('/login');
                    return false
                }

                const response = await getSingleUser(token);

                if(!response.ok){
                    throw new Error('something went wrong!');
                }

                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
        console.log(userData)
    }, [userDataLength]);

    return(
        <div className="animate__animated animate__fadeIn center">
        <Header />
        <NavMobile />
        <div className="account-container animate__animated animate__fadeIn" id="account-container">
        <h1 className="account-header">Account</h1>
        <div className="account-info-container" id="account-info-container">
        <BlockiesIdenticon className="blockie-nav" opts={{seed: "foobafdsafr"}}/>
            <div id="account-info-name">Name</div>

            <div id="account-info-name">{userData.email}</div>
                
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
            onClick={Auth.logout}
        >
            LOG OUT
        </Button>
        <NavDesktop />
        <Footer />
        </div>
    )
}

export default Account;