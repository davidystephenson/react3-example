import { imageSlice } from './reducers/imageReducer'
import { questionSlice } from './reducers/questionReducer'
import { configureStore } from '@reduxjs/toolkit'

const reducer = {
  image: imageSlice.reducer,
  question: questionSlice.reducer
}

const store = configureStore({
  reducer,
})

export default store