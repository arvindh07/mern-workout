import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { formatDistanceToNow } from 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteWorkout } from '../../features/workouts';

export default function WorkoutCard({ workout }) {
    const { _id, name, load, reps, createdAt } = workout;
    const dispatch = useDispatch();

    const handleDeleteWorkout = async (id) => {
        try {
            const response = await fetch(`http://localhost:4001/api/workouts/${id}`,{
                method:"DELETE"
            });
            const json = await response.json();
            console.log("resp -> ",response,json);
            dispatch(deleteWorkout({id}));
        } catch (error) {
            console.log("err",error);
        }
    }

    return (
        <Card sx={{ maxWidth: "40%", marginBlock: "1.5rem" }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1.5, color: "blueviolet", fontWeight: "bold", fontSize: "1.5rem" }}>
                    {name}
                </Typography>
                <Typography variant="body1">
                    Load: {load}
                </Typography>
                <Typography variant="body2">
                    Reps: {reps}
                </Typography>
                <Typography variant="body2">
                    {createdAt ?
                        formatDistanceToNow(new Date(createdAt), { addSuffix: true })
                        : ""}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small"></Button> */}
                <div >
                    <DeleteIcon className='delete' onClick={() => handleDeleteWorkout(_id)}/>
                </div>
            </CardActions>
        </Card>
    );
}