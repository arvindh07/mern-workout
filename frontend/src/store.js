import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './features/workouts'

export default configureStore({
  reducer: {
    workoutReducer
  },
})