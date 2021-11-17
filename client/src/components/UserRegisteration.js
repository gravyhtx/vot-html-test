import React from 'react';
import { Button } from 'react-materialize';
import Header from "./Header";
import Footer from './Footer';
import NavDesktop from "./NavDesktop";
import AddressForm from './modules/AddressForm';
import NewWallet from './modules/NewWallet';
import CompleteUserRegistration from './modules/CompleteUserRegistration';

const UserRegistration = () => {
    
    let user = {
        // GET FROM PREVIOUS FORM //
        firstName: "",
        lastName: "",
        email: "",
        // OPTIONAL //
        phone: "",
        // ENTER IN ADDRESS FORM //
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        // GET FROM NEW WALLET APP //
        walletProvider: "",
        walletHash: ""
    }

    return (
        <>
            <Header />
            <div className="user-registration-container">
                <h1 className="user-registration-header">Complete Your Registration</h1>
                <div className="user-registration-forms">
                    <AddressForm
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        phone={user.phone}
                        address1={user.address1}
                        address2={user.address2}
                        city={user.city}
                        state={user.state}
                        zipCode={user.zipCode} />
                    <NewWallet
                        walletProvider={user.walletProvider}
                        walletHash={user.walletHash} />
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