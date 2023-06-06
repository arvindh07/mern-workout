import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './features/workouts'
import userReducer from './features/userSlice'

export default configureStore({
  reducer: {
    workoutReducer,
    userReducer
  },
})