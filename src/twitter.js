import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./pages/upload";
import Home from "./Feed";
import Sidebar from "./Sidebar";
import List from "./components/tutorial-list.component";

function Twitter() {

    return (
      <div className="Twitter">
        <div className="row">
          <BrowserRouter>

            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/upload" component={AddTutorial} />
              <Route path="/list" component={List} />
            </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default Twitter;