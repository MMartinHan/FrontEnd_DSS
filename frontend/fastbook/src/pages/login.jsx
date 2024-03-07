import React, { useState, useEffect } from "react";
import "../css/login.css";
import Logo from "../assets/logo1.jpeg";
import Header from "../components/header";

const Login = () => {

    const URL = 'http://localhost:8000/admin/login/userdb/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Username = 'mateo';
    const Password = 'mateo123';

    const handleData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            // Manejar la respuesta del servidor según el resultado de la autenticación
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLoginClick = () => {
        // Llamar a la función handleData para realizar la comparación
        handleData();
    };


    return(
    <div>   
        <div className="login__logo">
            <img src={Logo} />
        </div>
        <div className="container">
            <div className="login">
                <h1 className="login__title">Sign In</h1>
                <div className="login__group">
                    <input type="email" id="email" required className="login__group__input" placeholder="Email"/>
                </div>
                <div className="login__group">
                    <input type="password" id="password" required className="login__group__input" placeholder="Password" />
                </div>
                <button className="login__sign-in" onClick={handleLoginClick}>Sign In</button>
            </div>
        </div>
    </div>);
}

export default Login;