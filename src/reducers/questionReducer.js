import { createAppSlice } from "./createAppSlice"

export const ADD_ANSWER = 'ADD_ANSWER'

// export function questionReducer (state = {}, action) {
//   console.log('reducer action', action)
//   switch(action.type) {
//     case ADD_ANSWER: {
//       const newAnswers = [...state.answers, action.payload]
//       const newState = { ...state, answers: newAnswers }
//       return newState
//     }
//     default: {
//       return state
//     }
//   }
// }

export const questionSlice = createAppSlice({
  name: 'question',
  initialState: {
    answers: []
  },
  reducers: {
    addAnswer: (state, action) => {
      const newAnswers = [...state.answers, action.payload]
      state.answers = newAnswers
    }
  }
})