import React from "react";
import DashCard from "../DashCard/DashCard";
import Accordion from "react-bootstrap/Accordion";
import ModulesContext from '../ModulesContext';

import "./Modules.css";

class Modules extends React.Component {

  static contextType = ModulesContext;

  render() {
    const { modules } = this.context
    const renderedList = modules.map(module => {
      return (
        <DashCard
          number={module.module}
          lessons={module.lessons}
        />
      );
    });

    return (
      <div className="module-list">
        <Accordion>{renderedList}</Accordion>
      </div>
    );
  }
}

export default Modules;
