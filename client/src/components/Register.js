import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';

import { loginUser } from '../utils/API';
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
            <div className="login-input-container">
                <div id="register-user-email">Email</div>
                <TextInput
                    email
                    name="email"
                    aria-labelledby="register-user-email"
                    className="input-field"
                    id="register-user-email_input"
                    onChange={handleInputChange}
                    value={userFormData.email} />
            </div>
            <div className="login-input-container">
                <div id="register-user-password">Password</div>
                <TextInput
                    type="password"
                    aria-labelledby="register-user-password"
                    className="input-field"
                    id="register-user-password_input"
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