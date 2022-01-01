import React, {useState} from 'react';
import { TextInput, Button } from 'react-materialize';

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const Login = () =>  {
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});
    const [validated] = useState(false);

    // console.log(Auth.loggedIn())

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

        try {
            const response = await loginUser(userFormData);

            if(!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            email: '',
            password: ''
        })
    }

    return (
        <>
                <div className="login-input-container" id="user-login-container">
                    <div id="user-login-email">Email</div>
                    <TextInput
                        email
                        className="input-field" 
                        id="user-login-email_input"
                        aria-labelledby="user-login-email"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        validate
                    />
                </div>
                <div className="login-input-container" id="user-login-container">
                    <div id="user-login-password">Password</div>
                    <TextInput 
                        className="input-field" 
                        id="user-login-password_input"
                        aria-labelledby="user-login-email"
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                    />
                </div>
                <div className="center-text">
                    <Button
                        node="button"
                        style={{
                        marginRight: '5px'
                        }}
                        waves="light"
                        onClick={handleFormSubmit}
                        className="login-btn"
                    >
                        SIGN IN
                    </Button>
                </div>
        </>
    )      
}
export default Login;