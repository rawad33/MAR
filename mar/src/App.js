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


function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/about">Login</Link>
            </li>
            
       
          </ul>
        </nav>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  
    </div>
  );
}
function Home() {
  let history =useHistory();
  return(
    <div className="login">
      <h1>hello rege</h1>
      <button onClick={()=>{
        history.push('/register')
      }}></button>
    </div>
  );
}

function About() {
  return(
<h1>12312</h1>
  );
}

function Users() {
  return <h2>register</h2>;
}
export default App;
