import React from "react";
import "../css/login.css";
import Logo from "../assets/logo1.jpeg";
import Header from "../components/header";

const Login = () => {
    return(
    <div>   
        <div className="login__logo">
            <img src={Logo} />
        </div>
        <div className="container">
            <div className="login">
                <h1 className="login__title">Sign In</h1>
                <div className="login__group">
                    <input type="text" required className="login__group__input" />
                    <label className="login__group__label">Username</label>
                </div>
                <div className="login__group">
                    <input type="password" required className="login__group__input" />
                    <label className="login__group__label">Password</label>
                </div>
                <button className="login__sign-in">Sign In</button>
            </div>
        </div>
    </div>);
}

export default Login;