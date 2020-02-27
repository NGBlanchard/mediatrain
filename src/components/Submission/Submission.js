import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import Button from "react-bootstrap/Button";
import ModulesContext from "../ModulesContext";

import "./Submission.css";

class Submission extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = ModulesContext;


  handleNext = e => {
    //SET VALUE OF PROGRESS INCREMENT BY CHECKPOINT VALUE
    this.context.setProgress()
    const next = this.props.lesson.id + 1;
    e.preventDefault();
    window.location.href = `/lesson/${next}`;
  };

  render() {
    return (
      <section className="submission">
        {this.props.lesson.questions.length > 1 ? (
          <>
            <h2 className="submission-header">Checkpoint</h2>
            <QuizCard lesson={this.props.lesson} />
          </>
        ) : (
          <div className="button-container">
          <Button
            variant="outline-success"
            size="lg"
            className="next-button"
            onClick={this.handleNext}
          >
            Next Lesson
          </Button>
          </div>
        )}
      </section>
    );
  }
}

export default Submission;
