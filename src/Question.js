import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { quizContext } from './context'

export default function Question () {
  const context = useContext(quizContext)
  const navigate = useNavigate()
  const answer = useRef()
  const base = Math.floor(Math.random() * 10)
  const total = Math.floor(Math.random() * 10)
  function handleChange (event) {
    answer.current = event.target.value
  }
  function handleSubmit (event) {
    event.preventDefault()
    console.log('answer', answer)
    const answerNumber = Number(answer.current)
    const correct = total - base === answerNumber
    console.log('correct', correct)
    context.addAnswer(base, answer, total, correct)
    navigate('/questions/scoreboard')
  }
  return (
    <form onSubmit={handleSubmit}>
      {base} + <input onChange={handleChange} /> = {total}
      <button type='submit'>Submit</button>
    </form>
  )
}