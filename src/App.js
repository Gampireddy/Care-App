import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Login from "./Login/Login.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Charts from "./Dashboard/Dashboard.js";
import Team from "./Team/Team.js";
import Main from "./MainNav/MainNav.js";
import Cases from "./Cases/Cases.js"
import Requests from "./Requests/Requests.js"

//import {  Container, Row,Form} from 'reactstrap';

class App extends Component {
  render() {
  
    // const currentPath = window.location.pathname
    // const myPath = "/";
    // const mainurl = "/Main";

    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/Charts" component={Charts} />
            <Route exact path="/Cases" component={Cases} />
            <Route exact path="/Requests" component={Requests} />
          </div>
        </Router>

        {/* <Home/> */}
      </div>
    );
  }
}

export default App;
