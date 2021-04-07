import React, { useState, useContext } from "react";
import { Context } from '../../../context/context';
import { client } from '../../../client/client';
import './LoginModal.css';

function LoginModal(props) {

    const { setIsLogged } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const isValidPassword = await client.checkPassword(email, password);
        if (isValidPassword) {
            const userName = await client.getUsernameByEmail(email);
            setIsLogged(userName);
        } else {
            alert("INCORRECT DATA");
        }
    };

    return (
        <div className="Form">
            <form onSubmit={onSubmit}>
                <input
                    id='email'
                    type="email"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    id='password'
                    type="password"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LoginModal
