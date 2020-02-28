import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Nav from "../Nav/Nav";
import ModulesContext from "../ModulesContext";
import "./LoginPage.css";
import config from "../../config";
import TokenService from "../../services/token-service";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  static contextType = ModulesContext;

  getStudentData(id) {
    return fetch(`${config.API_ENDPOINT}/students/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => this.context.setBigObj(res));
  }

  getUnits() {
    return fetch(`${config.API_ENDPOINT}/units`, {
      headers: {}
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => this.context.setList(res));
  }

  getStudentBigObject(id) {
    return Promise.all([this.getUnits(), this.getStudentData(id)]);
  }

  onLoginSuccess = id => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    this.getStudentBigObject(id).then(([units, studentData]) => {
      history.push(destination);
    });
  };

  render() {
    return (
      <>
        <section className="LoginPage">
          <div className="success-alert"></div>
          <h3 className="please-login">Please login below</h3>
          {/* <p className="demo">Demo Email: Demonstration@demo.demo <br/>
            Demo Password: DemoPassword1!</p> */}
          <LoginForm onLoginSuccess={this.onLoginSuccess} />
        </section>
      </>
    );
  }
}
