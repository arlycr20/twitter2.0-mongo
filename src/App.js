import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Principal from './principal';
import Twitter from './twitter';

function App() {
  return (
    
    <div className="app">
          
      <BrowserRouter>
          <Route exact path='/' component={Principal} />
          <Route path='/principal' component={Principal} />
        <Switch>
          <Route path='/twitter' component={Twitter} />
        </Switch>
       
      </BrowserRouter>
    </div>
  );
}
export default App;