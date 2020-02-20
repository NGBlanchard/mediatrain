import React from "react";
import BoxScore from "./quiz/BoxScore.js";
import QuestionList from "./quiz/QuestionList.js";
import Results from "./quiz/Results.js";
import ModulesContext from "../ModulesContext";

class QuizCard extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = ModulesContext;

  render() {
    
    const id = this.props.lesson.id;
    if (this.props.lesson.current > this.props.lesson.questions.length) {
      var boxscore = "";
      var results = <Results {...this.props.lesson} id={id} />;
    } else {
      var boxscore = <BoxScore {...this.props.lesson} id={id} />;
      var results = "";
    }
    return (
      <div>
        {boxscore}
        <QuestionList
          id={id}
          lesson={this.props.lesson}
          setScore={this.context.setScore.bind(this)}
          setCurrent={this.context.setCurrent.bind(this)}
          {...this.props.lesson}
        />
        {results}
      </div>
    );
  }
}

export default QuizCard;
