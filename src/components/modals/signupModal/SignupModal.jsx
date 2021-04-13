import React, { useState } from "react";
import { v4 } from "uuid";
import { client } from "../../../client";
import User from "../../../model/User";
import Account from "../../../model/Account";

import './SignupModal.css';

function SignupModal() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const account:Account = new Account(v4(), userName, 0, new Date().toLocaleDateString(), "active")
        const user:User = new User(v4(), userName, email, password, account)

        await client.signUp(user);
    };

    return(
        <form onSubmit={onSubmit}>
            <input id='userName' name="userName" type="text" placeholder="Enter your name..."
                   onChange={(e) => setUserName(e.target.value)} required />
            <input id='email' name="email" type="email" placeholder="Enter your email..."
                   onChange={(e) => setEmail(e.target.value)} required />
            <input id='password' name="password" type="password" placeholder="Enter your password..."
                   onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign up</button>
        </form>
    )
}

export default SignupModal
