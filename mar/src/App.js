import React from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Register from './view/components/Register/Register';


function App() {
  return (
    <div className="App">
       <Router>
      <div>

        <Switch>
           <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  
    </div>
  );
}
function Login() {
  let history =useHistory();
  return(
    <div className="login">
      <h1>hello rege</h1>
      <button onClick={()=>{
        history.push('/register')
      }}>das dsa</button>
    </div>
  );
}




export default App;
