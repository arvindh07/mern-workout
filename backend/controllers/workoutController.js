const Workout = require("../models/Workout");
const mongoose = require("mongoose");

const getWorkout = async (req, res, next) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

const postWorkout = async (req, res, next) => {
    const { name, load, reps } = req.body;
    try {
        const newWorkout = await Workout.create({ name, load, reps });
        res.status(200).json({
            message: "post workout",
            newWorkout
        })
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

const updateWorkout = async (req, res, next) => {
    const { name, load, reps } = req.body;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid id" })
    }

    try {
        const workout = await Workout.findOneAndUpdate({ _id: id }, { name, load, reps });
        if (!workout) {
            return res.status(404).json({ error: "No such workout" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

const deleteWorkout = async (req,res,next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid id" })
    }

    try {
        const workout = await Workout.findOneAndDelete({ _id:id });
        if (!workout) {
            return res.status(404).json({ error: "No such workout" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

const getSingleWorkout = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid id" })
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }
    res.status(200).json(workout);
}

module.exports = {
    getWorkout,
    postWorkout,
    updateWorkout,
    deleteWorkout,
    getSingleWorkout
}