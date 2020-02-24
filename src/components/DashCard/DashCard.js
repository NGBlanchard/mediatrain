import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { getLessonsForUnit } from '../../helpers'
import "./DashCard.css";

class DashCard extends React.Component {
  
  
  
  render() {
    const lessonsForUnit = getLessonsForUnit(this.props.lessons, this.props.number)
    const renderedLessons = lessonsForUnit.map(lesson => {
      return (
        <Accordion.Collapse eventKey={this.props.number} key={lesson.number}>
          <Link to={`/lesson/${lesson.id}`} className="lesson-text">
            <Card.Body className="lesson-list">
              Lesson {lesson.number} &#8212; {lesson.name}
            </Card.Body>
          </Link>
        </Accordion.Collapse>
      );
    });

    return (
      <Card className="module-title">
        <Accordion.Toggle as={Card.Header} eventKey={this.props.number} className="title">
          {this.props.unit.unitname}
        </Accordion.Toggle>
        {renderedLessons}
      </Card>
    );
  }
}
export default DashCard;
