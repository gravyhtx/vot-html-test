// import React, {useState} from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-materialize';
import Header from "../components/Header";
import Footer from '../components/Footer';
import NavMobile from "../components/NavMobile";
import NavDesktop from "../components/NavDesktop";
import AddressForm from '../components/AddressForm';
import CompleteUserRegistration from '../components/CompleteUserRegistration';

import Auth from '../utils/auth';
import {getSingleUser} from '../utils/API';

const UserRegistration = () => {

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

    return (
        <>
        <Header />
        <NavMobile />
        <div className="user-registration-container">
            <h1 className="user-registration-header">Complete Your Registration</h1>
            <div className="user-registration-forms">
                <AddressForm />
                <CompleteUserRegistration />
                <Button className="user-registration-skip">SKIP</Button>
            </div>
        </div>
        <Footer />
        <NavDesktop />
        </>
    )
}

export default UserRegistration;