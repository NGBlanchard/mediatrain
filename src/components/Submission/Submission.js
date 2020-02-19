import React from "react";
import Button from "react-bootstrap/Button";
import { quizzes } from "../../Quizzes/quiz1";
import QuizCard from '../QuizCard/QuizCard'
import "./Submission.css";

class Submission extends React.Component {
  state = {
    results: null,
  }
  
  static defaultProps = {
    match: {
      params: {}
    }
  };
  

  render() {
    const onCompleteAction = (obj) => {

    }

    // const renderCustomResultPage = (obj) => {
    //   return (
    //     <div>
    //       You earned {obj.numberOfCorrectAnswers} out of {obj.numberOfQuestions}
    //     </div>
    //   )
    // }

    const id = this.props.lesson;
    const quiz = quizzes[id];
    return (
      <>
        <h2 className="submission-header">Checkpoint</h2>
        <QuizCard quiz={quiz} onComplete={onCompleteAction}/>
        {/* <Button variant="outline-secondary" size="lg" className="work-button">
          Submit your work
        </Button> */}
      </>
    );
  }
}

export default Submission;
