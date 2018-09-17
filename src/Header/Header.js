import React from "react";
import "../Header/Header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

library.add(faUser);

export default class Header extends React.Component {
 
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
        <div className="header col-md-12" >
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        <FontAwesomeIcon icon="user" />
          

        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>User Name</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }
}