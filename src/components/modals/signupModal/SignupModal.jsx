import React from "react";
import { v4 } from "uuid";
import { client } from "../../../client";

import './SignupModal.css';

class SignupModal extends React.Component {
    state = {
        userName: "",
        email: "",
        password: ""
    };

    setUserName = (e) => {
        this.setState({
            userName: e.target.value,
        });
    };

    setEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    setPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            id: v4(),
            ...this.state,
            account: {
                id: v4(),
                created: new Date().toLocaleDateString(),
                readAmount: 0,
                status: "active"
            }
        };

        await client.signUp(newUser);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input id='userName' name="userName" type="text" placeholder="Enter your name..." onChange={this.setUserName} required />
                <input id='email' name="email" type="email" placeholder="Enter your email..." onChange={this.setEmail} required />
                <input id='password' name="password" type="password" placeholder="Enter your password..." onChange={this.setPassword} required />
                <button type="submit">Sign up</button>
            </form>
        )
    }
}

export default SignupModal