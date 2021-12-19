import React from 'react';
import { TextInput } from 'react-materialize';
import { Button } from 'react-materialize';

const AddressForm = ({firstName, lastName, email, phone, address1, address2, city, state, zipCode}) => {
    // firstName?firstName:""
    return (
        <>
        <div className='register-register-container container'>
            <div className="register-input-container" id="user-register-container">
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
            <div className="register-input-container" id="user-register-container">
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
        <br/>
        <div className='register-address-container container'>
            <div className="register-input-container" id="user-register-container">
            <div id="user-register-address">Address</div>
                <TextInput
                    className="input-field" 
                    id="user-register-address1_input"
                    aria-labelledby="user-register-address"
                    name="address1"
                    placeholder='Address Line 1'
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-address2_input"
                    aria-labelledby="user-register-address"
                    name="address2"
                    placeholder='Address Line 2'
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-city_input"
                    aria-labelledby="user-register-address"
                    name="city"
                    placeholder='City'
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-state_input"
                    aria-labelledby="user-register-address"
                    name="state"
                    placeholder='State'
                />
                <TextInput
                    email
                    className="input-field" 
                    id="user-register-zip_input"
                    aria-labelledby="user-register-address"
                    name="zip"
                    placeholder='Zip Code'
                />
            </div>
            <br/>
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
        </>
    )
}

export default AddressForm;