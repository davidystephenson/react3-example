import { useContext } from "react"
import Result from "./Result"
import { quizContext } from "./context"

export default function ScoreboardPage () {
  const context = useContext(quizContext)
  const resultViews = context.answers.map((answer, index) => {
    const number = index + 1
    return (
      <Result key={number} number={number} answer={answer} />
    )
  })
  return (
    <>
      <h2>Scoreboard</h2>
      {resultViews}
    </>
  )
}