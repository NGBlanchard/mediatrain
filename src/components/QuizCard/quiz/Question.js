import React from "react";
import Button from "react-bootstrap/Button";

class Question extends React.Component {
  handleChange(e) {
    const { setCurrent, setScore } = this.context;
    const { question } = this.props;
    e.preventDefault();
    const selected = e.target.value;
    setCurrent(this.props.current + 1);
    if (selected === question.correct) {
      setScore(this.props.score + 1);
    }
  }
  render() {
    console.log(this.props)
    const { question } = this.props;
    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {question.choices.map(choice => {
            return (
              <li className="list-group-item" key={choice.id}>
                {choice.id}
                <input
                  // onChange={this.handleChange.bind(this)}
                  type="radio"
                  name={question.id}
                  value={choice.id}
                />{" "}
                {choice.text}
              </li>
            );
          })}
        </ul>
        <Button variant="outline-secondary" size="lg" className="work-button" onClick={this.handleChange.bind(this)}>
          Submit
        </Button>
      </div>
    );
  }
}

export default Question;
