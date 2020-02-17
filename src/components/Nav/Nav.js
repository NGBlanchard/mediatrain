import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./Nav.css";

export default class Nav extends Component {
  


  render() {
    return (
      <nav className="nav">
        <h1>
          Media Center Training
        </h1>
        <h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/messages">Messages</Link>
        </h2>
      </nav>
    );
  }
}
