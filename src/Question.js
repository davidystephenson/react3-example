import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADD_ANSWER } from './reducers/questionReducer'
import { questionSlice } from './reducers/questionReducer'

export default function Question () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const answer = useRef()
  const base = Math.floor(Math.random() * 10)
  const total = Math.floor(Math.random() * 10)
  function handleChange (event) {
    answer.current = event.target.value
  }
  function handleSubmit (event) {
    event.preventDefault()
    const answerNumber = Number(answer.current)
    const correct = total - base === answerNumber
    const payload = {
      base,
      answer: answerNumber,
      total,
      correct
    }
    const action = questionSlice.actions.addAnswer(payload)
    dispatch(action)
    navigate('/questions/scoreboard')
  }
  return (
    <form onSubmit={handleSubmit}>
      {base} + <input onChange={handleChange} /> = {total}
      <button type='submit'>Submit</button>
    </form>
  )
}