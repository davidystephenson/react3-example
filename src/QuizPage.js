import { useState } from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'

export default function QuizPage () {
  const [ready, setReady] = useState(false)
  function handleStart () {
    setReady(true)
  }
  if (!ready) {
    return (
      <>
        <Link to='/questions/scoreboard'>Scoreboard</Link>
        <button onClick={handleStart}>Start Quiz</button>
      </>
    )
  }
  return (
    <Question />
  )
}