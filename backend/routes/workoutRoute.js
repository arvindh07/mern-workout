const express = require("express");
const { getWorkout, postWorkout, getSingleWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutController");
const router = express.Router();

// get
router.get("/", getWorkout);

// get a workout
router.get("/:id", getSingleWorkout)

// post
router.post("/", postWorkout)

// update
router.put("/:id", updateWorkout)

// delete
router.delete("/:id", deleteWorkout)

module.exports = router;