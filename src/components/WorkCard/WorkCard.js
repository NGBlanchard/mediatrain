import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./WorkCard.css";

class WorkCard extends React.Component {
  state = {
    submitted: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true
    });
    //SUBMIT WORK TO ADMIN
  };

  handleNext = e => {
    const next = this.props.lesson.id + 1;
    e.preventDefault();
    window.location.href = `/lesson/${next}`;
  };

  render() {
    return (
      <>
      <section className="work-instructions">
        <h3>Assignment</h3>
        {this.props.lesson.work}
      </section>
      <form className="work-form" onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post a link to your work below</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>
        <Form.Group>
          <Button
            variant="outline-success"
            size="lg"
            className="submit-work"
            onClick={this.handleSubmit}
          >
            {this.state.submitted === false ? "Submit Work" : "Submitted!"}
          </Button>
        </Form.Group>
        <Form.Group>
          <Button
            variant="outline-secondary"
            size="lg"
            className="result-button"
            onClick={this.handleNext}
          >
            Next Lesson
          </Button>
        </Form.Group>
      </form>
      </>
    );
  }
}

export default WorkCard;
