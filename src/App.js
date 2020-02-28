import React from "react";
import { Route, Switch } from "react-router-dom";
import ModulesContext from "./components/ModulesContext";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
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
      progress: 20
    },
    units: [
      {
        unitid: 1,
        unitname: "Hello, Getting Started"
      },
      {
        unitid: 2,
        unitname: "Fundamentals of American Literature"
      },
      {
        unitid: 3,
        unitname: "American Identity Part I"
      },
      {
        unitid: 4,
        unitname: "Dreams & Disillusionment"
      },
      {
        unitid: 5,
        unitname: "Descriptive Narrative"
      },
      {
        unitid: 6,
        unitname: "Horror"
      },
      {
        unitid: 7,
        unitname: "Media Literacy: Copyrights & Wrongs"
      },
      {
        unitid: 8,
        unitname: "American Identity Part II"
      },
      {
        unitid: 9,
        unitname: "Comedy"
      },
      {
        unitid: 10,
        unitname: "Media Literacy: Fakes & Hoaxes"
      },
      {
        unitid: 11,
        unitname: "Individuality & Conformity",
      },
      {
        unitid: 12,
        unitname: "Media Literacy: Effective Research Strategies"
      },
      {
        unitid: 13,
        unitname: "Argumentation"
      },
      {
        unitid: 14,
        unitname: "Fabulism"
      },
      {
        unitid: 15,
        unitname: "Transformations"
      },
      {
        unitid: 16,
        unitname: "Media Literacy: Your Data"
      },
      {
        unitid: 17,
        unitname: "The American Songbook"
      },
      {
        unitid: 18,
        unitname: "Media Literacy: Finding Happiness on Your Phone"
      },
      {
        unitid: 19,
        unitname: "Hybrid Essay"
      },
      {
        unitid: 20,
        unitname: "American Beauty"
      },
      {
        unitid: 21,
        unitname: "Goodbye To All That"
      },
    ],
    lessons: [
      {
        id: 1,
        number: 1.1,
        name: "Getting Started",
        unitid: 1,
        objective: "",
        video: "",
        content:
          "Welcome to American Literature! This module will help you get settled before you embark on the journey through this course. \n If you haven't already, acquire a copy of the required books. Make sure you get the same ISBN as is specified on the syllabus.",
        closing: "",  
        questions: [],
      },
      {
        id: 2,
        number: 1.2,
        name: "Code of Conduct",
        objective: "",
        video: "",
        unitid: 1,
        content: "lorem ipsum",
        closing: "",
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
      },{
        id: 3,
        number: 1.3,
        name: "Class Overview",
        objective: "",
        video: "",
        unitid: 1,
        content: "lorem ipsum",
        closing: "",
        questions: [],
      },
      {
        id: 4,
        number: 1.4,
        name: "Staying on Pace",
        objective: "",
        video: "",
        unitid: 1,
        content: "lorem ipsum",
        closing: "",
        questions: [],
      },
      {
        id: 5,
        number: 1.5,
        name: "Learning Strategies",
        objective: "",
        video: "",
        unitid: 1,
        content: "lorem ipsum",
        closing: "",
        questions: [],
      },
      {
        id: 6,
        number: 1.6,
        name: "Why We Read",
        objective: "",
        video: "",
        unitid: 1,
        content: "lorem ipsum",
        closing: "",
        questions: [],
        work: "Here is the work",
      },
      {
        id: 7,
        number: 2.1,
        name: "Reading & Thinking Critically",
        objective: "",
        video: "",
        unitid: 2,
        content: "lorem ipsum",
        closing: "",
        questions: [],
      },
      {
        id: 8,
        number: 2.2,
        name: "Essential Questions",
        objective: "",
        video: "",
        unitid: 2,
        content: "lorem ipsum",
        closing: "",
        questions: [],
        work: "Here is the work"
      },
      {
        id: 9,
        number: 2.3,
        name: "Literary Terms & Academic Vocabulary",
        objective: "",
        video: "",
        unitid: 2,
        content: "lorem ipsum",
        closing: "",
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
        number: 2.4,
        name: "The American Timeline: Why We Can't Cover Everything",
        objective: "",
        video: "",
        unitid: 2,
        content: "lorem ipsum",
        closing: "",
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
        number: 4.01,
        name: "Introduction: The American Dream",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
        questions: [],
      },
      {
        id: 12,
        number: 4.02,
        name: "F. Scott Fitzgerald",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 13,
        number: 4.03,
        name: "The Great Gatsby: Chapter One",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 14,
        number: 4.04,
        name: "The Great Gatsby: Chapter Two",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 15,
        number: 4.05,
        name: "The Great Gatsby: Chapter Three",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 16,
        number: 4.06,
        name: "The Great Gatsby: Chapter Four",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 17,
        number: 4.07,
        name: "The Great Gatsby: Chapter Five",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 18,
        number: 4.08,
        name: "The Great Gatsby: Chapter Six",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 19,
        number: 4.09,
        name: "The Great Gatsby: Chapter Seven",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 20,
        number: 4.10,
        name: "The Great Gatsby: Chapter Eight",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 21,
        number: 4.11,
        name: "The Great Gatsby: Chapter Nine",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 22,
        number: 4.12,
        name: "Cover Art",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 23,
        number: 4.13,
        name: "Boats Against the Current",
        objective: "",
        video: "",
        unitid: 4,
        content: "lorem ipsum",
        closing: "",
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
        id: 24,
        number: 5.1,
        name: "Introduction",
        objective: "",
        video: "",
        unitid: 5,
        content: "lorem ipsum",
        closing: "",
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
        id: 25,
        number: 5.2,
        name: "Explode the Moment",
        objective: "",
        video: "",
        unitid: 5,
        content: "lorem ipsum",
        closing: "",
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
        id: 26,
        number: 5.3,
        name: "Vivid Language",
        objective: "",
        video: "",
        unitid: 5,
        content: "lorem ipsum",
        closing: "",
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
        id: 27,
        number: 5.4,
        name: "The Crux of Stories",
        objective: "",
        video: "",
        unitid: 5,
        content: "lorem ipsum",
        closing: "",
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
        id: 28,
        number: 5.5,
        name: "Writing Your Descriptive Narrative",
        objective: "",
        video: "",
        unitid: 5,
        content: "Values Wheel",
        closing: "",
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
        id: 29,
        number: 6.1,
        name: "Introduction",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 30,
        number: 6.2,
        name: "The Swimming Pool",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 31,
        number: 6.3,
        name: "The Tell-Tale Heart",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 32,
        number: 6.4,
        name: "Orientation",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 33,
        number: 6.5,
        name: "Forms: Audio, Comics, TV, etcetera",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 34,
        number: 6.6,
        name: "Urban Legends",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 35,
        number: 6.7,
        name: "Don't Look Behind You",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 36,
        number: 6.8,
        name: "On Fear",
        objective: "",
        video: "",
        unitid: 6,
        content: "lorem ipsum",
        closing: "",
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
        id: 37,
        number: 10.1,
        name: "Introduction: Reading Drama",
        objective: "",
        video: "https://www.youtube.com/embed/udfqpajleeQ?rel=0&amp;showinfo=0",
        unitid: 10,
        content: "lorem ipsum",
        closing: "Act I end with a juxtaposition between the human scale and the cosmic scale...",
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
        id: 38,
        number: 10.2,
        name: "Act One",
        objective: "",
        video: "https://www.youtube.com/embed/udfqpajleeQ?rel=0&amp;showinfo=0",
        unitid: 10,
        content: "lorem ipsum",
        closing: "",
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
        id: 39,
        number: 10.3,
        name: "Act Two",
        objective: "",
        video: "",
        unitid: 10,
        content: "lorem ipsum",
        closing: "",
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
        id: 40,
        number: 10.4,
        name: "Act Three",
        objective: "",
        video: "",
        unitid: 10,
        content: "lorem ipsum",
        closing: "",
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
        id: 41,
        number: 10.5,
        name: "Analysis: Pessimisim vs. Optimism",
        objective: "",
        video: "",
        unitid: 10,
        content: "lorem ipsum",
        closing: "",
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
      
    ]
  };

  setProgress = increment => {
    let details = { ...this.state.details };
    details.progress = details.progress + increment;
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
              <Route exact path={"/"} component={LoginPage} />
              <Route exact path={"/registration"} component={RegistrationPage} />
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
