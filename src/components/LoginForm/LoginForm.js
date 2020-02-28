import React, { Component } from "react";
import ApiService from "../../services/api-service";
import TokenService from "../../services/token-service";
import ModulesContext from "../ModulesContext";

import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: id => {}
  };

  state = { error: null };
  static contextType = ModulesContext;

  handleAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { email, password } = e.target;
    ApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.setStudent(res.student.email);
        TokenService.setStudentId(res.student.id);
        this.props.onLoginSuccess(res.student.id);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <React.Fragment>
        <form className="LoginForm" onSubmit={this.handleAuth}>
          <span role="alert">{error && <p className="red">{error}</p>}</span>
          <section className="email">
            <label htmlFor="LoginForm__email">Email</label>
            <input name="email" id="LoginForm__email" />
          </section>
          <section className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <input name="password" type="password" id="LoginForm__password" />
          </section>
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    );
  }
}
