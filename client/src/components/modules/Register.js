import React from 'react';
import { TextInput, Button } from 'react-materialize';

const Register = () =>  {
    // let a =  [
    //     {name: "dude", id: 0},
    //     {name: "pisster", id: 1},
    //     {name: "kreat", id: 2}
    // ]
    // const el = a.map(b => {
    //     return <div className={`col${b.id}`}>{b.name}</div>
    // })
    return (
        <div className="register-cointainer">
            <div className="login-header">Register</div>
            <div>
                <div className="row">
                    <div className="login-input-container login-col col s5">
                        <div>First Name</div>
                        <TextInput id="login-user" />
                    </div>
                    <div className="col s1" />
                    <div className="login-input-container login-col col s6">
                        <div>Last Name</div>
                        <TextInput className="login-input" id="login-user" placeholder="(optional)" />
                    </div>
                </div>
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
                        Create Account
                    </Button>
                </div>
                {/* <div>{el}</div> */}
            </div>
        </div>
    )      
}
export default Register;