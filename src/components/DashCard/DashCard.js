import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./DashCard.css";

class DashCard extends React.Component {
  render() {
    
    const renderedLessons = this.props.lessons.map(lesson => {
      return (
        <Accordion.Collapse eventKey={this.props.number}>
          <Card.Body>
              {lesson.number}{' '}{lesson.name}
          </Card.Body>
        </Accordion.Collapse>
      )
    })

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.number}>
           Module {this.props.number}
        </Accordion.Toggle>
        {renderedLessons}
      </Card>
    );
  }
}
export default DashCard;
