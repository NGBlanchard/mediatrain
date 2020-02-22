import React from "react";

import './Welcome.css'

class Welcome extends React.Component {
  render() {
    return (
      <h1 className="welcome-card">
        {this.props.class}
      </h1>
    )
  }
}

export default Welcome;