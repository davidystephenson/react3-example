import { useContext } from "react"
import { quizContext } from "./context"

export default function Result (props) {
  const context = useContext(quizContext)
  const correctView = props.answer.correct ? 'Correct' : 'Incorrect'
  return (
    <h3>
      {props.number}/{context.answers.length}
      ({correctView})
    </h3>
  )
}