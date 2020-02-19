import React from "react";
import { findContent } from '../../helpers'
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
    const { lessons=[] } = this.context
    const { lessonId } = this.props.match.params
    const lessonIdNumber = parseInt(lessonId)
    const lesson = lessons.find(lesson => lesson.id === lessonIdNumber)
    return (
      <>
      <section className="lesson-header">
        Lesson # {lessonId}
      </section>
      <section>
        {lesson.content}
      </section>
      </>
    )
  }
}

export default Lesson;
