import React, {useState} from 'react';
import { Button } from 'react-materialize';
import Header from "../components/Header";
import Footer from '../components/Footer';
import NavDesktop from "../components/NavDesktop";
import AddressForm from '../components/AddressForm';
// import NewWallet from '../components/modules/NewWallet';
import CompleteUserRegistration from '../components/CompleteUserRegistration';

const UserRegistration = () => {
    
    return (
        <>
            <Header />
            <div className="user-registration-container">
                <h1 className="user-registration-header">Complete Your Registration</h1>
                <div className="user-registration-forms">
                    <AddressForm />
                        {/* // firstName={user.firstName}
                        // lastName={user.lastName}
                        // email={user.email}
                        // phone={user.phone}
                        // address1={user.address1}
                        // address2={user.address2}
                        // city={user.city}
                        // state={user.state}
                        // zipCode={user.zipCode} /> */}
                    {/* <NewWallet
                        walletProvider={user.walletProvider}
                        walletHash={user.walletHash} /> */}
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