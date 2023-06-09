const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    reps:{
        type:Number,
        required: true
    },
    load:{
        type:Number,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model("Workout",workoutSchema);