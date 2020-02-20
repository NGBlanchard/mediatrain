import React from 'react'


const ModulesContext = React.createContext({
  details: [],
  units: [],
  lessons: [],
  questions: [],
  quizzes: [],
  setCurrent: () => {},
  setScore: () => {},
  score: 0,
  current: 1
})

export default ModulesContext