import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const Register = () =>  {

    const [userFormData, setUserFormData] = useState({ email: '', password: ''});
    const [validated] = useState(false);

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
            const response = await createUser(userFormData);

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

        window.location.assign('/sign-up');
    }

    return (
        <>
            <div className="login-input-container">
                <div id="user-register-email">Email</div>
                <TextInput
                    email
                    name="email"
                    aria-labelledby="user-register-email"
                    className="input-field"
                    id="user-register-email_input"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    validate />
            </div>
            <div className="login-input-container">
                <div id="user-register-password">Password</div>
                <TextInput
                    name="password"
                    type="password"
                    aria-labelledby="user-register-password"
                    className="input-field"
                    id="user-register-password_input"
                    onChange={handleInputChange}
                    value={userFormData.password} />
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
                        onClick={handleFormSubmit}
                    >
                        Create Account
                    </Button>
                </Link>
            </div>
        </>
    )      
}
export default Register;