import React from 'react';
import BoxScore from './quiz/BoxScore.js';
import QuestionList from './quiz/QuestionList.js';
import Results from './quiz/Results.js';
import ModulesContext from "../ModulesContext";

class QuizCard extends React.Component {
  state = {
    results: null,
  }
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = ModulesContext;



  // setCurrent(current) {
  //   this.setState({current});
  // }
  // setScore(score) {
  //   this.setState({score});
  // }
  render() {
    if (this.context.current > this.context.questions.length) {
      var boxscore = '';
      var results = <Results {...this.context}/>
    } else {
      var boxscore = <BoxScore {...this.context} />
      var results = '';
    }
    return (
      <div>
        {boxscore}
        <QuestionList setScore={this.context.setScore.bind(this)} setCurrent={this.context.setCurrent.bind(this)} {...this.context}/>
        {results}
      </div>
    );
  }
}

export default QuizCard;