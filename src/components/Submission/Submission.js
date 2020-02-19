import React from "react";
import Button from "react-bootstrap/Button";
import "./Submission.css";

class Submission extends React.Component {
  render() {
    return (
      <section className="submission">
      <h2 className="submission-header">
        Checkpoint
      </h2>
    <Button variant="outline-secondary" size="lg" className="work-button">
        Submit your work
    </Button>
    </section>
    )
  }
}

export default Submission;
