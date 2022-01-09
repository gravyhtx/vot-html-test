import React, { useState, useEffect } from "react";
// import { Button } from "react-materialize";
import AddressForm from "./AddressForm";
import Auth from '../utils/auth';
import { getSingleUser } from '../utils/API';
import Web3Wallet from "../components/Web3Wallet";

import BlockiesIdenticon from "../components/BlockiesIdenticon";
// import { Icon } from "react-materialize";
import Avatar from "../images/icons/vot_avatar.svg";
import SvgContainer from "../components/SvgContainer";

const AccountContainer = () => {
    
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
        console.log(userData);
    }, [userDataLength]);
    // var canvas = userData.walletAddress?blockie:<></>
    // var blockieCanvas = document.getElementById('blockie-canvas');
    // const blockieUrl = blockieCanvas.toDataURL()
    // console.log(blockieUrl);
    // const dataURL = () => {
    //     let url = blockieCanvas.toDataURL()
    //     return(url)
    // }
    // const blockiePng = document.write('<img src="'+dataURL+'"/>');
    // console.log(dataURL);
    // var dataURL = canvas.toDataURL();
    // console.log(dataURL);
    // const blockie = document.write('<img src="'+img+'"/>');
    const blockie = <BlockiesIdenticon className="blockie-nav" opts={{seed: userData.walletAddress?userData.walletAddress:"Claire Richard"}}/>

    return (
        <>
        <div className="account-container animate__animated animate__fadeIn" id="account-container">
        <div className="account-info-container" id="account-info-container">
            <br/>
            <div className="blockie-container">
                {!userData.walletAddress
                ?<>{blockie}</>
                :<SvgContainer margins="26px" src={Avatar} classes="no-avatar" />}
            </div>
            <div className="account-info-name">{(userData.first_name && userData.last_name)?userData.first_name+" "+userData.last_name:""}</div>
            <div className="account-info-email">{userData.email}</div>
        </div>
        <Web3Wallet />
        <AddressForm />
        </div>
        </>
    )
}

export default AccountContainer;