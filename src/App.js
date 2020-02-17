import React from "react";
import { Route, Switch } from "react-router-dom";
import ModulesContext from "./components/ModulesContext";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/Messages/Messages";

import "./App.css";

class App extends React.Component {
  state = {
    modules: [
      {
        module: 1,
        lessons: [
          {
            number: 1.1,
            name: "testing lesson 1"
          },
          {
            number: 1.2,
            name: "testing lesson 2"
          },
          {
            number: 1.3,
            name: "testing lesson 3"
          }
        ]
      },
      {
        module: 2,
        lessons: [
          {
            number: 2.1,
            name: "testing lesson 1"
          },
          {
            number: 2.2,
            name: "testing lesson 2"
          },
          {
            number: 2.3,
            name: "testing lesson 3"
          }
        ]
      },
      {
        module: 3,
        lessons: [
          {
            number: 3.1,
            name: "testing lesson 1"
          },
          {
            number: 3.2,
            name: "testing lesson 2"
          },
          {
            number: 3.3,
            name: "testing lesson 3"
          },
          {
            number: 3.4,
            name: "testing lesson 4"
          }
        ]
      }
    ]
  };

  render() {
    const contextValue = {
      modules: this.state.modules
    };
    return (
      <>
        <div className="App">
          <ModulesContext.Provider value={contextValue}>
            <Nav />
            <Switch>
              <Route exact path={"/"} component={Login} />
              <Route exact path={"/dashboard"} component={Dashboard} />
              <Route exact path={"/messages"} component={Messages} />
            </Switch>
          </ModulesContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
