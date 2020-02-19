import React from 'react'


const ModulesContext = React.createContext({
  details: [],
  units: [],
  lessons: [],
  questions: [],
  setCurrent: () => {},
  setScore: () => {},
  score: null,
  current: null
})

export default ModulesContext