import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import "./Submission.css";

class Submission extends React.Component {

  static defaultProps = {
    match: {
      params: {}
    }
  };

  render() {
    return (
      <>
        <h2 className="submission-header">Checkpoint</h2>
        <QuizCard lesson={this.props.lesson}/>
      </>
    );
  }
}

export default Submission;
