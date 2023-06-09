import React, { useEffect, useState } from 'react';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import { useSelector } from 'react-redux';



const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);
    const workoutStore = useSelector((state) => state.workoutReducer.workouts);
    useEffect(() => {
        if (workoutStore) {
            setWorkouts(workoutStore);
        }
    }, [workoutStore])
    return (
        <div>
            {workouts?.length > 0 && workouts?.map((workout) => {
                return (
                    <WorkoutCard key={workout._id} workout={workout} />
                )
            })}
        </div>
    )
}

export default WorkoutList