import React from "react";
import Submission from "../Submission/Submission";
import ModulesContext from "../ModulesContext";

import "./Lesson.css";

const mql = window.matchMedia(`(min-width: 800px)`);

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
  }

  static contextType = ModulesContext;

  render() {
    const { lessons = [] } = this.context;
    const { lessonId } = this.props.match.params;
    const lessonIdNumber = parseInt(lessonId);
    const lesson = lessons.find(lesson => lesson.id === lessonIdNumber);
    return (
      <>
          <main className="lesson-main">
            <section className="pre-header">Lesson {lesson.number}</section>
            <header className="lesson-header">{lesson.name}</header>
            <section className="lesson-content">{lesson.content.split("\n").map((i,key) => {
            return <div className="display-linebreak" key={key}>{i}</div>;
        })}</section>
            {lesson.video.length !== 0 ? (
              <section className="video">
                <iframe
                  className="video-frame"
                  title="Lead Generation"
                  width="400"
                  height="300"
                  src={lesson.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </section>
            ) : (
              ""
            )}
            {lesson.closing.length !== 0 ? lesson.closing : ""}
            <Submission lesson={lesson} />
          </main>
      </>
    );
  }
}

export default Lesson;
