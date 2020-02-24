import React from "react";
import { Route, Switch } from "react-router-dom";
import ModulesContext from "./components/ModulesContext";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import Lesson from "./components/Lesson/Lesson";
import Messages from "./components/Messages/Messages";
import Syllabus from "./components/Syllabus/Syllabus";
import { findLesson } from "./helpers";
import "./App.css";

class App extends React.Component {
  state = {
    details: {
      class: "American Literature",
      teacher: "Nathan Blanchard",
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
      },
      {
        unitid: 14,
        unitname: "Poetry"
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
            text: "The answer is B",
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
        ]
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
        ]
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
        ]
      },
      {
        id: 4,
        number: 2.1,
        name: "Introduction",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "In what way(s) is this play different from most other plays?",
            choices: [
              {
                id: "A",
                text: "There are little to no sets, scenery, or props."
              },
              {
                id: "B",
                text: "The characters are all isolated from each other.JavaScript Object Notation"
              },
              {
                id: "C",
                text: "The stage manager is an actual character who addresses the audience."
              },
              {
                id: "D",
                text: "A & B"
              },
              {
                id: "E",
                text: "B & C"
              },
              {
                id: "F",
                text: "A & C"
              }
            ],
            correct: "F"
          },
          {
            id: 2,
            text: "What is the relationship between the stage manager and time?",
            choices: [
              {
                id: "A",
                text: "He slips between the time of the play (1901-1913) and 1938 (narrative present), but as he addresses the audience he becomes “timeless,” or “outside of time.”"
              },
              {
                id: "B",
                text: "He is of the 1930s, narrating the events of the play."
              },
              {
                id: "C",
                text: "He is of the 1930s, narrating the events of the play."
              },
              {
                id: "D",
                text: "B & C"
              },
              {
                id: "E",
                text: "None of the above"
              }
            ],
            correct: "A"
          },
          {
            id: 3,
            text:
              "What are the names of the families that are given the most focus in Act I?",
            choices: [
              {
                id: "A",
                text: "Webb and Crowell"
              },
              {
                id: "B",
                text: "Crowell and Gibbs"
              },
              {
                id: "C",
                text: "Newsome and Gibbs"
              },
              {
                id: "D",
                text: "Webb and Gibbs"
              },
              {
                id: "E",
                text: "Webb and Crowell"
              },
              {
                id: "F",
                text: "All of the above"
              }
            ],
            correct: "D"
          },
          {
            id: 4,
            text: "The stage manager reveals the fates of several characters, communicating to the audience the future of their lives. This emphasizes the theme of:",
            choices: [
              {
                id: "A",
                text: "Money"
              },
              {
                id: "B",
                text: "Heaven"
              },
              {
                id: "C",
                text: "Death"
              },
              {
                id: "D",
                text: "A & B"
              },
              {
                id: "E",
                text: "B & C"
              }
            ],
            correct: "C"
          },
          {
            id: 5,
            text: "What is the phrase we used to describe the effect of having no props, no sets, and no scenery?",
            choices: [
              {
                id: "A",
                text: "Dream vs. Reality"
              },
              {
                id: "B",
                text: "Foreground the Artifice"
              },
              {
                id: "C",
                text: "Keep Your Hands To Yourself"
              },
              {
                id: "D",
                text: "The Truth Is Out There"
              },
              {
                id: "E",
                text: "Invites the Reader"
              }
            ],
            correct: "B"
          }
        ]
      },
      {
        id: 5,
        number: 2.2,
        name: "Act One",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "In what way(s) is this play different from most other plays?",
            choices: [
              {
                id: "A",
                text: "There are little to no sets, scenery, or props."
              },
              {
                id: "B",
                text: "The characters are all isolated from each other.JavaScript Object Notation"
              },
              {
                id: "C",
                text: "The stage manager is an actual character who addresses the audience."
              },
              {
                id: "D",
                text: "A & B"
              },
              {
                id: "E",
                text: "B & C"
              },
              {
                id: "F",
                text: "A & C"
              }
            ],
            correct: "F"
          },
          {
            id: 2,
            text: "What is the relationship between the stage manager and time?",
            choices: [
              {
                id: "A",
                text: "He slips between the time of the play (1901-1913) and 1938 (narrative present), but as he addresses the audience he becomes “timeless,” or “outside of time.”"
              },
              {
                id: "B",
                text: "He is of the 1930s, narrating the events of the play."
              },
              {
                id: "C",
                text: "He is of the 1930s, narrating the events of the play."
              },
              {
                id: "D",
                text: "B & C"
              },
              {
                id: "E",
                text: "None of the above"
              }
            ],
            correct: "A"
          },
          {
            id: 3,
            text:
              "What are the names of the families that are given the most focus in Act I?",
            choices: [
              {
                id: "A",
                text: "Webb and Crowell"
              },
              {
                id: "B",
                text: "Crowell and Gibbs"
              },
              {
                id: "C",
                text: "Newsome and Gibbs"
              },
              {
                id: "D",
                text: "Webb and Gibbs"
              },
              {
                id: "E",
                text: "Webb and Crowell"
              },
              {
                id: "F",
                text: "All of the above"
              }
            ],
            correct: "D"
          },
          {
            id: 4,
            text: "The stage manager reveals the fates of several characters, communicating to the audience the future of their lives. This emphasizes the theme of:",
            choices: [
              {
                id: "A",
                text: "Money"
              },
              {
                id: "B",
                text: "Heaven"
              },
              {
                id: "C",
                text: "Death"
              },
              {
                id: "D",
                text: "A & B"
              },
              {
                id: "E",
                text: "B & C"
              }
            ],
            correct: "C"
          },
          {
            id: 5,
            text: "What is the phrase we used to describe the effect of having no props, no sets, and no scenery?",
            choices: [
              {
                id: "A",
                text: "Dream vs. Reality"
              },
              {
                id: "B",
                text: "Foreground the Artifice"
              },
              {
                id: "C",
                text: "Keep Your Hands To Yourself"
              },
              {
                id: "D",
                text: "The Truth Is Out There"
              },
              {
                id: "E",
                text: "Invites the Reader"
              }
            ],
            correct: "B"
          }
        ]
      },
      {
        id: 6,
        number: 2.3,
        name: "Act Two",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: "What is the effect of beginning Act II in the same way we began Act I?",
            choices: [
              {
                id: "A",
                text: "It shows the repetition of things that repeat."
              },
              {
                id: "B",
                text: "It highlights how conflict moves through incremental perturbation toward the climax."
              },
              {
                id: "C",
                text: "It shows how certain larger structures have not changed, yet there are subtle changes. It reflects the juxtaposition of the cosmic scale with the human scale."
              },
              {
                id: "D",
                text: "It doesn’t, this is a trick question."
              },
              {
                id: "E",
                text: "A & B"
              },
              {
                id: "F",
                text: "B & C"
              },
            ],
            correct: "C"
          },
          {
            id: 2,
            text: "Dr. Gibbs and Mrs. Gibbs",
            choices: [
              {
                id: "A",
                text: "Were not nervous at their own wedding."
              },
              {
                id: "B",
                text: "Were disappointed with Emily and George."
              },
              {
                id: "C",
                text: "Are worried about the growing problem in Europe."
              },
              {
                id: "D",
                text: "All of the above."
              },
              {
                id: "E",
                text: "None of the above"
              }
            ],
            correct: "E"
          },
          {
            id: 3,
            text:
              "The officiant is",
            choices: [
              {
                id: "A",
                text: "Intentionally boring, Si Crowell"
              },
              {
                id: "B",
                text: "Unintentionally boring, The Stage Manager"
              },
              {
                id: "C",
                text: "Unintentionally boring, Dr. Gibbs"
              },
              {
                id: "D",
                text: "Intentionally boring, The Stage Manager"
              },
              {
                id: "E",
                text: "Unintentionally boring, Howie Newsome"
              }
            ],
            correct: "D"
          },
          {
            id: 4,
            text: "How does 'Ceci n'est pas une pipe' relate to the play?",
            choices: [
              {
                id: "A",
                text: "It doesn’t, that’s French and this is English."
              },
              {
                id: "B",
                text: "In both pieces, the artifice is foregrounded."
              },
              {
                id: "C",
                text: "The Stage Manager has a pipe in Act I."
              },
              {
                id: "D",
                text: "None of the above"
              },
              {
                id: "E",
                text: "A & B"
              },
              {
                id: "F",
                text: "B & C"
              }
            ],
            correct: "B"
          },
          {
            id: 5,
            text: "What nonlinear technique is used in Act II?",
            choices: [
              {
                id: "A",
                text: "Flashback"
              },
              {
                id: "B",
                text: "Flashforward"
              },
              {
                id: "C",
                text: "Flash sideways"
              },
              {
                id: "D",
                text: "This is a trick question, this is a linear narrative"
              },
              {
                id: "E",
                text: "Are you out of your skull!?"
              },
            ],
            correct: "A"
          }

        ]
      },
      {
        id: 7,
        number: 2.4,
        name: "Act Three",
        objective: "",
        video: "",
        unitid: 12,
        content: "lorem ipsum",
        questions: [
          {
            id: 1,
            text: " Why does Emily go back to her 12th birthday?",
            choices: [
              {
                id: "A",
                text: "She wants to choose a happy, but ordinary day."
              },
              {
                id: "B",
                text: "She is only allowed to choose a day from before her marriage."
              },
              {
                id: "C",
                text: "It was the happiest day of her life."
              },
              {
                id: "D",
                text: "It was the saddest day of her life."
              },
              {
                id: "E",
                text: "B & C"
              }
            ],
            correct: "A"
          },
          {
            id: 2,
            text: "_______ says, 'Choose the least important day in your life. It will be __________ enough.'",
            choices: [
              {
                id: "A",
                text: "The Stage Manager, important"
              },
              {
                id: "B",
                text: "Mrs. Gibbs, sad"
              },
              {
                id: "C",
                text: "The Stage Manager, sad"
              },
              {
                id: "D",
                text: "Mrs. Gibbs, important"
              },
              {
                id: "E",
                text: "None of the above"
              }
            ],
            correct: "D"
          },
          {
            id: 3,
            text:
              "What do the dead do in the cemetery?",
            choices: [
              {
                id: "A",
                text: "Forget the living and await what’s next."
              },
              {
                id: "B",
                text: "Debate the merits of goodwill and simple life."
              },
              {
                id: "C",
                text: "Try to change the past."
              },
              {
                id: "D",
                text: "B & C"
              },
              {
                id: "E",
                text: "All of the above."
              }
            ],
            correct: "A"
          },
          {
            id: 4,
            text: "What does Emily realize about life in Act III?",
            choices: [
              {
                id: "A",
                text: "Death means never having to say goodbye. The dead watch over us and are still with us as we move through our lives."
              },
              {
                id: "B",
                text: "She should never have longed to move to the big city. Grover’s Corners was just as fulfilling as any other place to live, and she wasted her life wanting more."
              },
              {
                id: "C",
                text: "People do not appreciate the beauty of life, that life seems to be made of insignificant days, but they are significant because we are alive."
              },
              {
                id: "D",
                text: "A & B"
              },
              {
                id: "E",
                text: "All of the above"
              }
            ],
            correct: "C"
          },
          {
            id: 5,
            text: "How does 'Ceci n'est pas une pipe' heighten the impact of Act III?",
            choices: [
              {
                id: "A",
                text: "The audience has been innoculated against the sentimentality of the play by acknowledging the whole time that it is just that: a play, and so they are unexpectedly receptive to its larger themes."
              },
              {
                id: "B",
                text: "The audience has been giggling about how silly the actors look pretending to hold props, which shows that there’s always comedy in tragedy."
              },
              {
                id: "C",
                text: "George and Emily aren’t really in love, they are a 'false representation' of love."
              },
              {
                id: "D",
                text: "A & C"
              },
              {
                id: "E",
                text: "B & C"
              }
            ],
            correct: "A"
          }

        ]
      },
      {
        id: 8,
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
        ]
      },
      {
        id: 9,
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
        ]
      },
      {
        id: 10,
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
        ]
      },
      {
        id: 11,
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
        ]
      }
    ]
  };

  setProgress = score => {
    let details = { ...this.state.details };
    details.progress = details.progress + score;
    this.setState({
      details
    });
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
      setProgress: this.setProgress
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
              <Route exact path={"/syllabus"} component={Syllabus} />

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
