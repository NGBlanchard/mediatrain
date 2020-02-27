import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "../../images/dashboard.png";
import Messages from "../../images/messagesblue.png";
import Logo from "../../images/logo.png";

import ModulesContext from "../ModulesContext";

import "./Nav.css";

export default class Nav extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = ModulesContext;

  render() {
    // const { details = [] } = this.context;
    return (
      <Navbar className="nav" sticky="top">
        {/* <h1>
          {details.class}
        </h1> */}
        <div className="nav-icons">
          <Link to="/syllabus">
            <img src={Logo} className="logo" alt="dashboard logo"></img>
          </Link>
          <Link to="/dashboard">
            <img src={Dashboard} className="dash" alt="dashboard logo"></img>
          </Link>
          <Link to="/messages">
            <img src={Messages} className="messages" alt="messages logo"></img>
          </Link>
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Current Grade: <a href="#login">A</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
