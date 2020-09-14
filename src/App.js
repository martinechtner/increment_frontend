import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AuthService from "./Services/auth.service";

import Login from './Components/Login';
import Register from './Components/Register';
import Increment from './Components/Increment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(typeof (localStorage.getItem('jwt-token')) !== 'undefined' && localStorage.getItem('jwt-token') !== null)
  }, [])

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Increment API Accessor
          </Link>
          {
            isAuthenticated ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    Log Out
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )
          }
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/"} component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/increment" component={Increment}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
