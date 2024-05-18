import { useContext } from "react"
import { useSelector } from 'react-redux'

export default function Result (props) {
  const answers = useSelector(state => state.question.answers)
  const correctView = props.answer.correct ? 'Correct' : 'Incorrect'
  return (
    <h3>
      {props.number}/{answers.length}
      ({correctView})
    </h3>
  )
}