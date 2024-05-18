import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { createAppSlice } from "./createAppSlice"
import axios from 'axios'
export const START_DOWNLOAD = 'START_DOWNLOAD'
export const FINISH_DOWNLOAD = 'FINISH_DOWNLOAD'

// export function imageReducer (state = {}, action) {
//   switch (action.type) {
//     case START_DOWNLOAD: {
//       return { ...state, downloading: true }
//     }
//     case FINISH_DOWNLOAD: {
//       return { ...state, downloading: false, url: action.payload }
//     }
//     default: {
//       return state
//     }
//   }
// }

export const imageSlice = createAppSlice({
  name: 'image',
  initialState: {
    loading: false,
    url: '',
  },
  reducers: (create) => {
    return {
      download: create.asyncThunk(
        async () => {
          const url = 'https://dog.ceo/api/breeds/image/random'
          const response = await axios.get(url)
          return response.data.message
        },
        {
          pending: (state) => {
            state.loading = true
          },
          rejected: (state) => {
            state.loading = false
          },
          fulfilled: (state, action) => {
            state.loading = false
            state.url = action.payload
          }
        }
      )
    }
  }
})
