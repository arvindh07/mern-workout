import React, { useEffect } from 'react'
import WorkoutList from '../components/WorkoutList/WorkoutList'
import CreateWorkout from '../components/CreateWorkout/CreateWorkout'
import "./Home.css";
import { addWorkouts } from '../features/workouts';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/workouts");
        const resJson = await response.json();
        dispatch(addWorkouts(resJson));
      } catch (error) {
        console.log("api err -> ", error);
      }
    }
    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="wrapper">
      <div className="left">
        <WorkoutList />
      </div>
      <div className="right">
        <CreateWorkout />
      </div>
    </div>
  )
}

export default Home