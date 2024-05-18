import { useContext } from "react"
import Result from "./Result"
import { useSelector } from "react-redux"

export default function ScoreboardPage () {
  const answers = useSelector(state => state.question.answers)
  console.log('ScoreboardPage answers:', answers)
  const resultViews = answers.map((answer, index) => {
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