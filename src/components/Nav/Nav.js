import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/messages">Messages</Link>
        </h2>
      </nav>
    );
  }
}
