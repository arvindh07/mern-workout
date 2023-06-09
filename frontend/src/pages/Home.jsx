import React, { useEffect } from 'react'
import WorkoutList from '../components/WorkoutList/WorkoutList'
import CreateWorkout from '../components/CreateWorkout/CreateWorkout'
import "./Home.css";
import { addWorkouts } from '../features/workouts';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../features/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      dispatch(loginUser(user));
    }
  },[])

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/workouts",{
          headers: {
            'authorization':`Bearer ${user.token}`
          }
        });
        const resJson = await response.json();
        dispatch(addWorkouts(resJson));
      } catch (error) {
        console.log("api err -> ", error);
      }
    }
    if (user) {
      fetchWorkouts();
    }
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