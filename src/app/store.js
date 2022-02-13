import {configureStore} from '@reduxjs/toolkit';
import animesReducer from '../features/animesSlice'

export const store = configureStore({
  reducer:{
    animes: animesReducer
  } 
})