import React from "react";

import ModulesContext from '../ModulesContext';


class UnitList extends React.Component {

  static contextType = ModulesContext;

  render() {
    return (
      <div>
        Unit List
      </div>
    )
    }
  }

  export default UnitList;