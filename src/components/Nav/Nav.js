import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Nav.css";

export default class Nav extends Component {
  


  render() {
    return (
      <nav className="nav">
        <h1>
          CHS Media Center Training
        </h1>
        <h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/messages">Messages</Link>
        <Button>Hello</Button>
        </h2>
      </nav>
    );
  }
}
