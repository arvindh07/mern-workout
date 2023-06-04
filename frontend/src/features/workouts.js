import { createSlice } from '@reduxjs/toolkit'

export const workoutSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts:{}
  },
  reducers: {
    addWorkouts: (state,action) => {
      const {payload} = action;
      state.workouts = payload;
    },
    postWorkout: (state,action) => {
      const {payload} = action;
      state.workouts.push(payload);
    },
    deleteWorkout: (state,action) => {
      const {id} = action.payload;
      state.workouts = state.workouts.filter((w) => w._id !== id);
    }
  },
})

export const { addWorkouts, postWorkout, deleteWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;