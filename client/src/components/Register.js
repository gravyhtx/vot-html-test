import React from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';

const Register = () =>  {
    return (
        <>
            <div className="login-input-container">
                <div>Email</div>
                <TextInput className="input-field" id="login-user" />
            </div>
            <div className="login-input-container">
                <div>Password</div>
                <TextInput className="input-field" id="login-user" />
            </div>
            <div className="center-text">
                <Link to="/complete-signup">
                    <Button
                        node="button"
                        style={{
                        marginRight: '5px'
                        }}
                        waves="light"
                        className="login-btn"
                    >
                        Create Account
                    </Button>
                </Link>
            </div>
        </>
    )      
}
export default Register;