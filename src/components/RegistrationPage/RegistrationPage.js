import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Nav from "../Nav/Nav";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <>
        <section className="RegistrationPage">
          <h2>Register Below</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </>
    );
  }
}
