import React from 'react';
import { TextInput, Button } from 'react-materialize';

const Login = () =>  {
    return (
        <div className="login-cointainer">
            <div className="login-header">Login</div>
            <div>
                <div className="login-input-container">
                    <div>Email</div>
                    <TextInput className="login-input" id="login-user" />
                </div>
                <div className="login-input-container">
                    <div>Password</div>
                    <TextInput className="login-input" id="login-user" />
                </div>
                <div>
                <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                >
                    Log In
                </Button>
                </div>
            </div>
        </div>
    )      
}
export default Login;