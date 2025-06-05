import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: []
}


const surveyData = createSlice({
  name: "surveyData",
  initialState,
  reducers: {
    addData: function (state, action) {
      const id = state.data.length + 1
      state.data.push({
        id,
        ...action.payload
      })
      return state
    },
    removeData: function (state, action) {
      if(state.data) console.log(state.data)
      state.data?.filter((_, idx) => idx !== Number(action.payload))
      return state
    }
  }
})

export const { addData } = surveyData.actions
export const { removeData } = surveyData.actions
export default surveyData.reducer