import React from "react";
import DashCard from "../DashCard/DashCard";
import Accordion from "react-bootstrap/Accordion";
import ModulesContext from "../ModulesContext";

import "./Modules.css";

class Modules extends React.Component {
  static contextType = ModulesContext;

  render() {
    const { units, lessons } = this.context;
    const renderedList = units.map(unit => {
      if (unit.unitid < 11) {
        return (
          <DashCard
            unit={unit}
            number={unit.unitid}
            lessons={lessons}
            key={unit.unitid}
          />
        );
      }
    });
    const renderedList2 = units.map(unit => {
      if (unit.unitid >= 11) {
        return (
          <DashCard
            unit={unit}
            number={unit.unitid}
            lessons={lessons}
            key={unit.unitid}
          />
        );
      }
    });
    return (
      <div className="module-list">
        <div className="semester">
          Semester 1
          <Accordion>{renderedList}</Accordion>
        </div>
        <div className="semester">
          Semester 2
          <Accordion>{renderedList2}</Accordion>
        </div>
      </div>
    );
  }
}

export default Modules;
