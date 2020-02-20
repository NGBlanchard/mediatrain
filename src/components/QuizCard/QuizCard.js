import React from "react";
import BoxScore from "./quiz/BoxScore.js";
import QuestionList from "./quiz/QuestionList.js";
import Results from "./quiz/Results.js";
import ModulesContext from "../ModulesContext";

class QuizCard extends React.Component {
  state = {
    current: 1,
    score: 0
  };
  static defaultProps = {
    match: {
      params: {}
    }
  };

  setCurrent = current => {
    this.setState({
      current: current
    });
  };

  setScore = score => {
    this.setState({
      score: score
    });
  };

  static contextType = ModulesContext;

  render() {
    const id = this.props.lesson.id;
    if (this.state.current > this.props.lesson.questions.length) {
      var boxscore = "";
      var results = <Results {...this.props.lesson} score={this.state.score} id={id} />;
    } else {
      var boxscore = <BoxScore {...this.props.lesson} current={this.state.current} id={id} />;
      var results = "";
    }
    return (
      <div>
        {boxscore}
        <QuestionList
          id={id}
          current={this.state.current}
          score={this.state.score}
          setCurrent={this.setCurrent}
          setScore={this.setScore}
          lesson={this.props.lesson}
          {...this.props.lesson}
        />
        {results}
      </div>
    );
  }
}

export default QuizCard;
