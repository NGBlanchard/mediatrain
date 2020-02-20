import React from "react";
import Button from "react-bootstrap/Button";
import ModulesContext from "../../ModulesContext";


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  static contextType = ModulesContext;

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleChange(e) {
    const { setCurrent, setScore } = this.context;
    const { question } = this.props;
    const lesson = this.props.lesson.id
    e.preventDefault();
    const selected = e.target.value;
    setCurrent(this.props.current + 1, lesson);
    if (selected === question.correct) {
      setScore(this.props.score + 1, lesson);
    }
  }
  render() {
    const { question } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="question-form">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {question.choices.map(choice => {
            return (
              <li className="list-group-item" key={choice.id}>
                {choice.id}
                <input
                  onChange={this.handleChange.bind(this)}
                  type="radio"
                  name={question.id}
                  value={choice.id}
                />{" "}
                {choice.text}
              </li>
            );
          })}
        </ul>
        {/* <Button
          variant="outline-secondary"
          size="lg"
          className="work-button"
          onClick={this.handleChange.bind(this)}
        >
          Submit
        </Button> */}
      </form>
    );
  }
}

export default Question;
