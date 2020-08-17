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
import Login from './view/components/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" component={Login}>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}





export default App;
