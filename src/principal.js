import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/login.component';
import Signup from './components/signup.component';

function Principal() {

    return (
        <div className="Principal">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container">
                        <div className="nav-brand text-light">𝕋𝕎𝕀𝕋𝕋𝔼ℝ 𝟚.𝟘</div>
            
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item form-inline">
                                    <Link className="nav-link" to={"/login"}>Inicio de Sesion</Link>
                                    <Link className="nav-link" to={"/signup"}>Registro</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br></br>
                
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </Router>
        </div>
  );
}

export default Principal;