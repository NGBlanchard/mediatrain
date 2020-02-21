import React from "react";
import { Route, Switch } from "react-router-dom";
import ModulesContext from "./components/ModulesContext";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import Lesson from "./components/Lesson/Lesson";
import Messages from "./components/Messages/Messages";
import { findLesson } from "./helpers";
import "./App.css";

class App extends React.Component {
  state = {
    details: {
      class: "American Lit",
      teacher: "Thomas Pynchon",
      progress: 80
    },
    units: [
      {
        unitid: 11,
        unitname: "The Great Gatsby"
      },
      {
        unitid: 12,
        unitname: "Our Town"
      },
      {
        unitid: 13,
        unitname: "Sula"
      }
    ],
    lessons: [
      {
        id: 1,
        number: 1.1,
        name: "Testing lesson 1.1",
        unitid: 11,
        objective: "",
        video: "",
        content:
          "This course presents a historical overview of the American literary tradition. Students will be exposed to American culture, heritage, and history through the study of American literature, to develop and apply effective communication skills through speaking and active listening in small and large groups, and to continue advancement towards refined writing skills.",
        questions: [
          {
            id: 1,
            text: "The answer is B",
            choices: [
              {
                id: "a",
                text: "This is A"
              },
              {
                id: "b",
                text: "This is B"
              },
              {
                id: "c",
                text: "This is C"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "The answer is A",
            choices: [
              {
                id: "a",
                text: "This is A"
              },
              {
                id: "b",
                text: "This is B"
              },
              {
                id: "c",
                text: "This is C"
              }
            ],
            correct: "a"
          },
          {
            id: 3,
            text:
              "The answer is B",
            choices: [
              {
                id: "a",
                text: "This is A"
              },
              {
                id: "b",
                text: "This is B"
              }
            ],
            correct: "b"
          },
          {
            id: 4,
            text: "The answer is A",
            choices: [
              {
                id: "a",
                text: "This is A"
              },
              {
                id: "b",
                text: "This is B"
              }
            ],
            correct: "a"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 2,
        number: 1.2,
        name: "Testing lesson 1.2",
        objective: "",
        video: "",
        unitid: 11,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 3,
        number: 1.3,
        name: "Testing lesson 1.3",
        objective: "",
        video: "",
        unitid: 11,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 4,
        number: 2.1,
        name: "Testing lesson 2.1",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 5,
        number: 2.2,
        name: "Testing lesson 2.2",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 6,
        number: 2.3,
        name: "Testing lesson 2.3",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 7,
        number: 3.1,
        name: "Testing lesson 3.1",
        objective: "",
        video: "",
        unitid: 13,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 8,
        number: 3.2,
        name: "Testing lesson 3.2",
        objective: "",
        video: "",
        unitid: 13,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 9,
        number: 3.3,
        name: "Testing lesson 3.3",
        objective: "",
        video: "",
        unitid: 13,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      },
      {
        id: 10,
        number: 3.4,
        name: "Testing lesson 3.4",
        objective: "",
        video: "",
        unitid: 13,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What does JSON stand for",
            choices: [
              {
                id: "a",
                text: "JavaScript Oriented Notation"
              },
              {
                id: "b",
                text: "JavaScript Object Notation"
              },
              {
                id: "c",
                text: "JavaScript Organic Notation"
              }
            ],
            correct: "b"
          },
          {
            id: 2,
            text: "Which company mantains ReactJS",
            choices: [
              {
                id: "a",
                text: "Google"
              },
              {
                id: "b",
                text: "Facebook"
              },
              {
                id: "c",
                text: "Airbnb"
              }
            ],
            correct: "b"
          },
          {
            id: 3,
            text:
              "Is it an antipattern to include props in the getInitialState method of a component?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "a"
          },
          {
            id: 4,
            text: "Is ReactJS a framework by itself?",
            choices: [
              {
                id: "a",
                text: "Yes"
              },
              {
                id: "b",
                text: "No"
              }
            ],
            correct: "b"
          }
        ],
        // score: 0,
        // current: 1
      }
    ]
  };

  // setCurrent = (current, lesson) => {
  //   const index = getLessonForQuiz(this.state.lessons, lesson);
  //   let lessons = { ...this.state.lessons };
  //   lessons[index].current = current;
  //   this.setState({
  //     lessons
  //   });
  // };

  // setScore = (score, lesson) => {
  //   const index = getLessonForQuiz(this.state.lessons, lesson);
  //   let lessons = { ...this.state.lessons };
  //   lessons[index].score = score;
  //   this.setState({
  //     lessons
  //   });
  // };

  render() {
    const contextValue = {
      lessons: this.state.lessons,
      units: this.state.units,
      details: this.state.details,
      questions: this.state.questions,
      quizzes: this.state.quizzes,
    };
    const { lessons } = this.state;
    return (
      <>
        <div className="App">
          <ModulesContext.Provider value={contextValue}>
            <Nav />
            <Switch>
              <Route exact path={"/"} component={Login} />
              <Route exact path={"/dashboard"} component={Dashboard} />
              <Route exact path={"/messages"} component={Messages} />
              <Route
                path="/lesson/:lessonId"
                render={routeProps => {
                  const { lessonId } = routeProps.match.params;
                  const lesson = findLesson(lessons, lessonId);
                  return <Lesson {...routeProps} lesson={lesson} />;
                }}
              />
            </Switch>
          </ModulesContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
