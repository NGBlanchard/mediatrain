import React from "react";
import QuizCard from "../QuizCard/QuizCard";
import WorkCard from "../WorkCard/WorkCard";
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
    this.context.setProgress();
    const next = this.props.lesson.id + 1;
    e.preventDefault();
    window.location.href = `/lesson/${next}`;
  };

  render() {
    const renderWork = () => {
      if (this.props.lesson.work) {
        return <WorkCard lesson={this.props.lesson} />;
      } else {
        return null;
      }
    };
    const renderQuestions = () => {
      if (this.props.lesson.questions.length > 1) {
        return (
          <>
            <h2 className="submission-header">Checkpoint</h2>
            <QuizCard lesson={this.props.lesson} />
          </>
        );
      } else {
        return null;
      }
    };
    const renderNext = () => {
      if (!this.props.lesson.work && this.props.lesson.questions.length <= 1) {
        return (
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
        );
      } else {
        return;
      }
    };
    return (
      <section className="submission">
        {renderWork()}
        {renderQuestions()}
        {renderNext()}
      </section>
    );
  }
}

export default Submission;
