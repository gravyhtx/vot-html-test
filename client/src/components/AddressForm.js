import React, {useState} from 'react';
import { TextInput } from 'react-materialize';
import { Button } from 'react-materialize';
import Web3Wallet from './Web3Wallet';
import Auth from '../utils/auth';
import { updateUser } from '../utils/API';

const AddressForm = () => {
    // firstName?firstName:""
    const [userFormData, setUserFormData] = useState({
        // GET FROM PREVIOUS FORM //
        first_name: "",
        last_name: "",
        // OPTIONAL //
        phone: "",
        // ENTER IN ADDRESS FORM //
        addressOne: "",
        addressTwo: "",
        city: "",
        state: "",
        zip: "",
        // GET FROM NEW WALLET APP //
        walletAddress: "",
        walletBalance: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]: value });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            window.location.assign('/404');
            return false;
        }

        try {
            const response = await updateUser(userFormData, token);

            if(!response.ok) {
                throw new Error('something went wrong!');
            }

        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            first_name: "",
            last_name: "",
            // OPTIONAL //
            phone: "",
            // ENTER IN ADDRESS FORM //
            addressOne: "",
            addressTwo: "",
            city: "",
            state: "",
            zip: "",
            // GET FROM NEW WALLET APP //
            walletAddress: "",
            walletBalance: ""
        })

        window.location.assign('/');
    }

    return (
        <>
        <div className='register-register-container container'>
            <div className='row'>
                <div className="register-input-container col s12 m6" id="user-register-container">
                    <div id="user-register-email">Email</div>
                    <TextInput
                        email
                        className="input-field" 
                        id="user-register-email_input"
                        aria-labelledby="user-register-email"
                        name="email"
                        validate
                    />
                </div>
                <div className="register-input-container col s12 m6" id="user-register-container">
                    <div id="user-register-password">Password</div>
                    <TextInput 
                        className="input-field" 
                        id="user-register-password_input"
                        aria-labelledby="user-register-email"
                        type="password"
                        name="password"
                    />
                </div>
            </div>
        </div>
        <br/>
        <div className='register-address-container container'>
            <div className="register-input-container" id="user-register-container">
            <div id="user-register-address">Address</div>
                <TextInput
                    className="input-field" 
                    id="user-register-address1_input"
                    aria-labelledby="user-register-address"
                    name="addressOne"
                    placeholder='Address Line 1'
                    onChange={handleInputChange}
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-address2_input"
                    aria-labelledby="user-register-address"
                    name="addressTwo"
                    placeholder='Address Line 2'
                    onChange={handleInputChange}
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-city_input"
                    aria-labelledby="user-register-address"
                    name="city"
                    placeholder='City'
                    onChange={handleInputChange}
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-state_input"
                    aria-labelledby="user-register-address"
                    name="state"
                    placeholder='State'
                    onChange={handleInputChange}
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-zip_input"
                    aria-labelledby="user-register-address"
                    name="zip"
                    placeholder='Zip Code'
                    onChange={handleInputChange}
                />
            </div>
            <br/>

            <div>
                <Web3Wallet />
            </div>
            <Button
                node="button"
                style={{
                    marginRight: '5px',
                    width: '250px'
                }}
                waves="light"
                className="account-wallet-btn"
                onClick={handleFormSubmit}
            >
                Finish Updating User
            </Button>
        </div>
        </>
    )
}

export default AddressForm;