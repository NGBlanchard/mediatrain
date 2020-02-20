import React from 'react'


const ModulesContext = React.createContext({
  details: [],
  units: [],
  lessons: [],
  questions: [],
  quizzes: [],
  setCurrent: () => {},
  setScore: () => {},
})

export default ModulesContext