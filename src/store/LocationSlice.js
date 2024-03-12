import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  currentLocation: { name: '', coordinate: '0,0'},
  confirmMessage: ''
}

export const saveLocation = createAsyncThunk(
  'location/saveLocation',
  async (requestBody) => {
    axios.post(
      "http://localhost:8080/api/location", 
      requestBody, 
      { 'Content-Type': 'application/x-www-form-urlencoded' },
    )
  }
);

const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload
    },
    resetConfirmMessage: (state) => {
      state.confirmMessage = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveLocation.fulfilled, (state) => {
        state.confirmMessage = "Location has been added"
      })
      .addCase(saveLocation.rejected, (state) => {
        state.confirmMessage = "Location could not be added"
      })

  },
})

export const { setCurrentLocation } = locationSlice.actions
export default locationSlice.reducer