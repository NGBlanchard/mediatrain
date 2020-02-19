import React from "react";
import { findLesson } from '../../helpers'
import ModulesContext from "../ModulesContext";

import "./Lesson.css";

class Lesson extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = ModulesContext;

  getContent = (arr, id) => {
    for (let i=0; i < arr.length; i++) {
      if (arr[i].lessons === id) {
        return arr[i].lessons.id
      }
    }
  }

  render() {
    const { lessonId } = this.props.match.params
    const { unitId } = this.props.match.params
    const { units } = this.context
    const content = this.getContent(units, lessonId)
    
    return <div>Lesson # {lessonId}</div>;
  }
}

export default Lesson;
