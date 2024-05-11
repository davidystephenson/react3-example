import { createContext, useState } from 'react'

export const quizContext = createContext()

export function QuizProvider (props) {
  const [answers, setAnswers] = useState([])
  function addAnswer (base, answer, total, correct) {
    const newAnswer = {
      base,
      answer,
      total,
      correct
    }
    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers)
  }
  const value = {
    addAnswer,
    answers
  }
  return (
    <quizContext.Provider value={value}>
      {props.children}
    </quizContext.Provider>
  )
}