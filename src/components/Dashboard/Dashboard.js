import React from "react";
import Welcome from '../Welcome/Welcome'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Modules from '../Modules/Modules'
import Footer from '../Footer/Footer'
import ModulesContext from '../ModulesContext';

import "./Dashboard.css";

class Dashboard extends React.Component {
  
  static contextType = ModulesContext;
  
  render() {
    const { details } = this.context
    
    return (
      <>
        <Welcome />
        <ProgressBar
          className="progress" 
          animated 
          now={details.progress} 
          label={`${details.progress}%`}
          striped variant="success"
          />
        <Modules 
          className="modules"/>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
