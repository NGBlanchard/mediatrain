import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./DashCard.css";

class DashCard extends React.Component {
  render() {
    const renderedLessons = this.props.lessons.map(lesson => {
      return (
        <Accordion.Collapse eventKey={this.props.number} key={lesson.number}>
          <Link to={`/lesson/${lesson.id}`} className="lesson-text">
            <Card.Body className="lesson-list">
              {lesson.number} {lesson.name}
            </Card.Body>
          </Link>
        </Accordion.Collapse>
      );
    });

    return (
      <Card className="module-title">
        <Accordion.Toggle as={Card.Header} eventKey={this.props.number}>
          Module {this.props.number}
        </Accordion.Toggle>
        {renderedLessons}
      </Card>
    );
  }
}
export default DashCard;
