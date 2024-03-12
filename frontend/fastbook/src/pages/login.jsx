import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import "../css/login.css";
import Logo from "../assets/logo1.jpeg";
import Header from "../components/header";
import UserContext from "../components/context";

const Login = () => {

    const { setUser } = useContext(UserContext);

    const URL = 'http://127.0.0.1:8000/login/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [role, setRole] = useState('');
    const Username = 'mateo';
    const Password = 'mateo123';
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleData = async () => {
        const data = {
            email: email,
            password: password
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(Username + ':' + Password)
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 400) {
                setErrorMessage('Email or password incorrect');
                throw new Error('Bad response from server');
            }
        })
        .then(data => {
            console.log('Usuario:', data);
            console.log('Role:', data.role);
            console.log('Email:', data.email);
            console.log('Nombre:', data.name);
            setRole(data.role); // Guarda el rol en el estado
            setUser(data.name); // Guarda el usuario en el estado
            if (data.role === 'estudiante') {
                navigate('/catalogo');
                console.log('Estudiante');
            } else if (data.role === 'bibliotecario') {
                navigate('/main_bibliotecario');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleLoginClick = () => {
        // Llamar a la función handleData para realizar la comparación
        setErrorMessage('');
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
                    <input type="email" id="email" required className="login__group__input" placeholder="Email" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="login__group">
                    <input type="password" id="password" required className="login__group__input" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="login__group">
                    <p className="login__title">{errorMessage}</p>
                </div>
                <button className="login__sign-in" onClick={handleLoginClick}>Sign In</button>
            </div>
        </div>
    </div>);
}

export default Login;