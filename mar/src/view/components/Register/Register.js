import React from 'react';
import './Register.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";



function Register() {
  let history =useHistory();
  return(
  <div className="register">
    <h1>Register</h1>
       <form onSubmit={handleSubmit}>
         <label>Email:</label> <br />
       <input type='text' name='userEmail' placeholder="User Email"  required/><br />
       <label>First Name:</label><br />
       <input type='text' name='firstName' placeholder="First Nmae"required /><br />
       <label>Last Name:</label><br />
       <input type='text' name='lastName' placeholder="Last Name"required/><br />
        <label> Profile Picture:</label> <br />
       <input type='text' name='imgurl' placeholder="User Img"required/><br />
       <label>Password:</label> <br />
       <input password='text' name='password' placeholder="Password"required/><br />
       <button type='submit'>Register</button><br />
     </form>
  </div>
    )
  }

  function handleSubmit(e){
    e.preventDefault();
    let { userEmail, firstName,lastName,imgurl,password } = e.target.elements;
    userEmail = userEmail.value;
    firstName=firstName.value;
    lastName = lastName.value;
    imgurl=imgurl.value;
    password=password.value;

    console.log(userEmail, firstName,lastName,imgurl,password)


    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ userEmail, firstName,lastName,imgurl,password }),
      headers: {
          'Content-Type': 'application/json'
      },
  }).then(res => res.json())
  .then(data => {
    console.log(data);
    const {firstName,lastName,Registerstatus}=data;
    console.log(firstName);
    if(Registerstatus){
      // history.push('/');
    }

    
  })

  



     
  }


  export default  Register;