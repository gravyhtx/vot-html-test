import React, { useState, useEffect } from "react";
// import { Button } from "react-materialize";
import AddressForm from "./AddressForm";
import Auth from '../utils/auth';
import { getSingleUser } from '../utils/API';
import Web3Wallet from "../components/Web3Wallet";

import { Button } from "react-materialize";
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
                console.log(token)
                if(!token) {
                    window.location.assign('/login');
                    return false
                }

                const response = await getSingleUser(token);

                if(!response.ok){
                    throw new Error('something went wrong!');
                }

                const user = await response.json();
                console.log(user)
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
    const getWallet = localStorage.getItem('-walletlink:https://www.walletlink.org:Addresses');

    const getColors = localStorage.getItem('blockie-color');
    const setColors = (n) => localStorage.setItem('blockie-color', n);

    // let scheme = getColors?getColors:["#111111","#3b4954","#7FCCE4"];
    // let color1 = scheme[0];
    // let color2 = scheme[1];
    // let color3 = scheme[2];
    
    let color1;
    let color2;
    let color3;
    let scheme = getColors?getColors:0;

    console.log("color: "+getColors)

    if (scheme < 1) {
        setColors(scheme);
        console.log(scheme);
        color1 = "#111111";
        color2 = "#3b4954";
        color3 = "#7FCCE4";
    } else if (scheme > 1) {
        setColors(scheme);
        console.log(scheme);
        color1 = "#7FCCE4";
        color2 = "#111111";
        color3 = "#3b4954";
    } else {
        setColors(scheme);
        console.log(scheme);
        color1 = "#3b4954";
        color2 = "#7FCCE4"
        color3 = "#111111"
    }

    const setScheme = () => {
        console.log('click')
        if (scheme === 1) {
            scheme++;
            setColors(scheme);
            console.log(scheme);
            // color1 = "#3b4954";
            // color2 = "#7FCCE4"
            // color3 = "#111111"
        } else if (scheme > 1) {
            scheme = 0;
            setColors(scheme);
            console.log(scheme);
            // color1 = "#7FCCE4";
            // color2 = "#111111";
            // color3 = "#3b4954";
        } else {
            scheme++;
            setColors(scheme);
            console.log(scheme);
            // color1 = "#111111";
            // color2 = "#3b4954";
            // color3 = "#7FCCE4";
        }
        window.location.reload();
    }


    // const
    // const blockie = <BlockiesIdenticon className="blockie-nav" opts={{seed: userData.walletAddress?userData.walletAddress:"Claire Richard"}}/>
    const blockie = <BlockiesIdenticon
                        onClick={setScheme}
                        className="blockie-nav"
                        opts={{
                            seed: getWallet?getWallet:"Claire Richard",
                            color: color1,
                            bgcolor: color2,
                            size: 10,
                            scale: 8,
                            spotcolor: color3
                    }}/>

    return (
        <>
        <div className="account-container animate__animated animate__fadeIn" id="account-container">
        <div className="account-info-container" id="account-info-container">
            <br/>
            <div onClick={console.log('click')} className="blockie-container">
                {userData.walletAddress
                ?<>
                {blockie}
                </>
                :<SvgContainer src={Avatar} classes="no-avatar" />}
            </div>
            {userData.walletAddress
            ?<Button
                node="button"
                className="blockie-colors not-a-button monospace"
                onClick={setScheme}>
                [CHANGE COLOR SCHEME]
            </Button>
            :<></>}
            <div className="account-info-name">{(userData.first_name && userData.last_name)?userData.first_name+" "+userData.last_name:""}</div>
            <div className="account-info-email">{userData.email}</div>
        </div>
        <div className="account-wallet">
        <Web3Wallet />
        </div>
        <AddressForm />
        </div>
        </>
    )
}

export default AccountContainer;