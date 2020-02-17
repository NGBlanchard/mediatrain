import React from "react";
import Welcome from '../Welcome/Welcome'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Modules from '../Modules/Modules'
import "./Dashboard.css";

class Dashboard extends React.Component {
  
  
  render() {
    const now = 45
    return (
      <>
        <Welcome />
        <ProgressBar
          className="progress" 
          animated 
          now={now} 
          label={`${now}%`}
          striped variant="success"
          />
        <Modules 
          className="modules"/>
      </>
    );
  }
}

export default Dashboard;
