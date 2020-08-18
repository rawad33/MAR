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

            {/* <input type="text" id="Inp-UserName" name="Inp-username" placeholder="first name"></input>
            <input type="text" id="Inp-Lastname" name="Inp-Lastname" placeholder="last name"></input>
            <input type="text" id="Inp-password" name="Inp-password" placeholder="password"></input>

            <button name="loginBtn" onClick={onLogin}> Login </button>
            <button name="registerBtn" onClick={onRegister}> register a new User </button> */}

            <form onSubmit={onLogin}>

                <input type='text' name='firstName' placeholder="First Nmae" required /><br />
                <input type='text' name='lastName' placeholder="Last Name" required /><br />
                <input password='text' name='password' placeholder="Password" required /><br />
                <button type='submit'>Login</button><br />

            </form>

            <button name="registerBtn" onClick={onRegister}> register a new User </button>

        </div >
    );

    function onLogin(e) {

        e.preventDefault();
        let { firstName, lastName, password } = e.target.elements;
        firstName = firstName.value;
        lastName = lastName.value;
        password = password.value;



        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                //   let result} = data;
                if (data.login == true) {
                    localStorage.setItem("UserLastname", data.lastName);

                    //       history.push("/Todo");
                    history.push("/todo");
                }

                console.log(data);
            })


    };

    function onRegister(e) {
        e.preventDefault();
        history.push("/register");
    }

    // function onTodo(e) {
   
    //     history.push("/todo");
    // }


}




export default Login;

