import React from "react";
import Submission from "../Submission/Submission";
import ModulesContext from "../ModulesContext";

import "./Lesson.css";

class Lesson extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = ModulesContext;

  render() {
    const { lessons = [] } = this.context;
    const { lessonId } = this.props.match.params;
    const lessonIdNumber = parseInt(lessonId);
    const lesson = lessons.find(lesson => lesson.id === lessonIdNumber);

    return (
      <>
        <main className="lesson-main">
          <header className="lesson-header">{lesson.name}</header>
          <section className="lesson-content">{lesson.content}</section>
        <Submission lesson={lesson} />
        </main>
      </>
    );
  }
}

export default Lesson;
