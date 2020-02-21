import React from "react";
import Button from "react-bootstrap/Button";
import ModulesContext from "../../ModulesContext";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false
    };
  }
  static contextType = ModulesContext;

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = e => {
    // const { setCurrent, setScore } = this.props;
    const { question } = this.props;
    const lesson = this.props.lesson.id;
    e.preventDefault();
    const selected = this.state.value;
    if (this.state.value === "") {
      this.setState({
        error: true
      });
    } else this.props.setCurrent(this.props.current + 1, lesson);

    if (selected === question.correct) {
      this.props.setScore(this.props.score + 1, lesson);
    }
  };
  render() {
    const { question } = this.props;
    return (
      <form className="question-form">
        {this.state.error ? (
          <p className="error">You must select an answer</p>
        ) : (
          ""
        )}
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {question.choices.map(choice => {
            return (
              <li className="list-group-item" key={choice.id}>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name={question.id}
                  value={choice.id}
                />{" "}
                {choice.text}
              </li>
            );
          })}
        </ul>
        <div className='submit-button-container'>
        <Button
          type="submit"
          variant="outline-secondary"
          size="lg"
          className="submit-button"
          onClick={this.handleSubmit.bind(this)}
        >
          Submit
        </Button>
        </div>
      </form>
    );
  }
}

export default Question;
