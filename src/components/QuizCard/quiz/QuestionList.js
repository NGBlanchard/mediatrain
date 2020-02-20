import React from "react";
import Question from "./Question.js";

class QuestionList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  render() {
    return (
      <div className="quesitons">
        {this.props.lesson.questions.map(question => {
          if (this.props.current === question.id) {
            return (
              <Question
                question={question}
                key={question.id}
                {...this.props}
                setCurrent={this.props.setCurrent}
                setScore={this.props.setScore}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default QuestionList;
