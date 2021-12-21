import React, {useState, useEffect} from "react";
import { Button } from "react-materialize";
import Auth from '../utils/auth';
import {getSingleUser} from '../utils/API';
import NewWallet from "../components/NewWallet";

import BlockiesIdenticon from "../components/BlockiesIdenticon"

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
    const blockie = <BlockiesIdenticon className="blockie-nav" opts={{seed: userData.walletAddress?userData.walletAddress:userData.email}}/>

    const addWallet=
            <Button
                node="button"
                style={{
                    width: '250px'
                }}
                waves="light"
                className="account-wallet-btn"
            >ADD WALLET</Button>
    const deactivateWallet=
            <Button
                node="button"
                style={{
                    width: '250px'
                }}
                waves="light"
                className="account-wallet-btn"
            >ADD WALLET</Button>

    return (
        <>
        <div className="account-container animate__animated animate__fadeIn" id="account-container">
        <h1 className="account-header">Account</h1>
        <div className="account-info-container" id="account-info-container">
            <br/>
            <div className="blockie-container">
                {blockie}
            </div>
            <div id="account-info-name">{(userData.first_name && userData.last_name)?userData.first_name+" "+userData.last_name:""}</div>
            <div id="account-info-name">{userData.email}</div>
        </div>
            {userData.walletAddress ? deactivateWallet : addWallet}
            <NewWallet />
        </div>
        </>
    )
}

export default AccountContainer;