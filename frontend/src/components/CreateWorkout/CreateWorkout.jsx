import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postWorkout } from '../../features/workouts';

const CreateWorkout = () => {
    const initialState = {
        name: "",
        load: "",
        reps: ""
    }
    const [formDetails, setFormDetails] = useState(initialState);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4001/api/workouts", {
            method: 'POST',
            body:JSON.stringify(formDetails),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const respJson = await response.json();
        console.log("resp json -> ",respJson);
        setFormDetails(initialState);
        dispatch(postWorkout(respJson.newWorkout));
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    p: 5
                },
            }}
        >
            <Paper elevation={3} >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={formDetails?.name}
                        autoFocus
                        onChange={changeHandler}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="load"
                        value={formDetails?.load}
                        label="Load"
                        type="text"
                        id="load"
                        onChange={changeHandler}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="reps"
                        value={formDetails?.reps}
                        label="Reps"
                        type="text"
                        id="reps"
                        onChange={changeHandler}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default CreateWorkout