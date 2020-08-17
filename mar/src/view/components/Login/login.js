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
            <form >
            <label for="username">Username:</label>
            <input type="text" id="Inp-UserName" name="Inp-username"></input>

            <label for="Inp-Lastname">Lastname:</label>
            <input type="text" id="Inp-Lastname" name="Inp-Lastname"></input>

            <label for="lname">Password:</label>
            <input type="text" id="Inp-password" name="Inp-password" ></input>
            
            <button onClick={() => {
                    history.push('/register')
                }}> New User </button>        
            </form> 
 
        </div>

        );
      

}


export default Login;