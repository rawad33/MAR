<<<<<<< HEAD
import React from 'react';
import './Login.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";


function Login(props) {
    let history = useHistory();






    return (
        <div className="login">
            <h2>Login</h2>

            <input type="text" id="Inp-UserName" name="Inp-username" placeholder="first name"></input>
            <input type="text" id="Inp-Lastname" name="Inp-Lastname" placeholder="last name"></input>
            <input type="text" id="Inp-password" name="Inp-password" placeholder="password"></input>

            <button name="loginBtn" onClick={onLogin}> Login </button>
            <button name="registerBtn" onClick={onRegister}> register a new User </button>

        </div >
    );

    function onLogin(e) {
        e.preventDefault();

        /*      fetch('/api/login', {
                 method: 'POST',
                 body: {  },
                 headers: { }
             })
         */


    };

    function onRegister(e) {
        e.preventDefault();
        history.push("/Register");
    }


}




export default Login;
=======



>>>>>>> dev

