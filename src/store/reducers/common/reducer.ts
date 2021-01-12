import { createSlice } from '@reduxjs/toolkit'

const initialState: object[] = []

const movieSlice = createSlice({
  name: '@@common',
  initialState,
  reducers: {},
})

const { reducer } = movieSlice

export default reducer
