import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAnimes } from './animesApi'

const initialState ={
  status:'idle',
  data: []
}

export const animesAsync = createAsyncThunk(
  'animes/fetchAnimes',
  async (uri) => {
    const response = await fetchAnimes(uri)
    return await response.json();
  }
)

export const animesSlice = createSlice({
  name:'animes',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
    .addCase(animesAsync.pending,(state) =>{
      state.status = 'loading';
    })
    .addCase(animesAsync.fulfilled, (state,action) => {
      state.status = 'idle';
      state.data = action.payload
    })
  }
})

export const selectAnimes = (state) => state.animes.data;

export default animesSlice.reducer