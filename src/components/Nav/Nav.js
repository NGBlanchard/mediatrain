import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../images/dashboard.png";
import Messages from "../../images/messages.png";


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
    const { details = [] } = this.context;
    return (
      <nav className="nav">
        <h1>
          {details.class}
        </h1>
        <div className="nav-icons">
        <h2>
        <Link to="/dashboard"><img src={Dashboard} className="icon" alt="dashboard logo"></img></Link>
        <Link to="/messages"><img src={Messages} className="icon" alt="messages logo"></img></Link>
        </h2>
        </div>
      </nav>
    );
  }
}
