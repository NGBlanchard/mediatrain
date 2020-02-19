import React from "react";
import DashCard from "../DashCard/DashCard";
import Accordion from "react-bootstrap/Accordion";
import ModulesContext from '../ModulesContext';

import "./Modules.css";

class Modules extends React.Component {

  static contextType = ModulesContext;

  render() {
    const { units, lessons } = this.context
    const renderedList = units.map(unit => {
      return (
        <DashCard
          unit={unit}
          number={unit.unitid}
          lessons={lessons}
          key={unit.unitid}
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
