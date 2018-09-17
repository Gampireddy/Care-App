import React, { Component } from "react";
import "./MainNav.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Charts from "../Dashboard/Dashboard.js";
import Team from "../Team/Team.js";
import {
  faHands,
  faUsers,
  faCalendar,
  faChild,
  faRupeeSign
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from "reactstrap";
library.add(faHands, faUsers, faCalendar, faChild, faRupeeSign);

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logo: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="col-lg-1 col-md-2 navbar-left">
        <div className="logo-wrapper row">
          <img
            className="logo img-fluid d-block mx-auto"
            src={require("../images/logo.png")}
          />
        </div>
        <ul className="row">
          <li className="col-sm-">
            <a href="/Team">
              <FontAwesomeIcon icon="users" />Team
            </a>
          </li>
          <li>
            <a href="/Requests">
              <FontAwesomeIcon icon="child" /> Requests
            </a>
          </li>
          <li>
            <a href="/Cases">
              <FontAwesomeIcon icon="hands" />
              Cases
            </a>
          </li>

          <li>
            <a href="">
              <FontAwesomeIcon icon="calendar" />Events
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon="rupee-sign" />Donate
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
