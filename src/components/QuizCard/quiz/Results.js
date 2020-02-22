import React from "react";
import Button from "react-bootstrap/Button";
import ModulesContext from "../..//ModulesContext";


class Results extends React.Component {
  state = {
    submitted: false
  };

  static contextType = ModulesContext;


  handleSubmit = e => {
    //THIS SHOULD POST SCORE TO USER DB
    e.preventDefault();
    this.setState({
      submitted: true
    });
    this.context.setProgress(this.props.score);
  };
  handleNext = e => {
    const next = this.props.id + 1;
    e.preventDefault();
    window.location.href = `/lesson/${next}`;
  };

  handleRetake = e => {
    e.preventDefault();
    this.props.setCurrent(1);
    this.props.setScore(0);
  };

  render() {
    var percent = (this.props.score / this.props.questions.length) * 100;
    if (percent > 80) {
      var message = "You did awesome!";
    } else if (percent < 80 && percent > 60) {
      var message = "Well done, you passed";
    } else {
      var message = "You did not pass";
    }
    return (
      <div className="results">
        <h4>
          You got {this.props.score} out of {this.props.questions.length}
        </h4>
        <h2>
          {percent}% - {message}
        </h2>
        <Button
          variant="outline-success"
          size="lg"
          className="submit-button"
          onClick={this.handleSubmit.bind(this)}
        >
          {" "}
          {this.state.submitted === false
            ? "Submit Score to Gradebook"
            : "Submitted!"}
        </Button>
        {percent > 60 ? (
          <Button
            variant="outline-secondary"
            size="lg"
            className="result-button"
            onClick={this.handleNext.bind(this)}
          >
            Next Lesson
          </Button>
        ) : (
          <Button
            variant="outline-danger"
            size="lg"
            className="result-button"
            onClick={this.handleRetake.bind(this)}
          >
            Retake Quiz
          </Button>
        )}
      </div>
    );
  }
}

export default Results;
