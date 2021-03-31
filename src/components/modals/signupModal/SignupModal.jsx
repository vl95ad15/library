import React from "react";
import './SignupModal.css';

function SignupModal(props) {

    return (
        <div className='loginModal'>
            <label>Username</label>
            <input type='text'/>
            <label>Email</label>
            <input type='email'/>
            <label>Password</label>
            <input type='password'/>
        </div>
    )
}

export default SignupModal