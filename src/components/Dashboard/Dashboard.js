import React from "react";
import Welcome from "../Welcome/Welcome";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modules from "../Modules/Modules";
import Footer from "../Footer/Footer";
import ModulesContext from "../ModulesContext";

import "./Dashboard.css";

class Dashboard extends React.Component {
  static contextType = ModulesContext;

  render() {
    const { details } = this.context;

    return (
      <section className="dashboard">
        <Welcome class={details.class} />
        <ProgressBar
          className="progress"
          animated
          now={details.progress}
          label={`${details.progress}%`}
          variant="success"
        />
        <h2 className="units-header">Course Overview</h2>
        <Modules className="modules" />
        <Footer />
      </section>
    );
  }
}

export default Dashboard;
