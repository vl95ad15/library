import React from "react";
import './LoginModal.css';

function LoginModal(props) {

    return (
        <div className='loginModal'>
            <label>Username</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
        </div>
    )
}

export default LoginModal
