const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4002;
const mongoose = require("mongoose");
const workoutRoute = require("./routes/workoutRoute");

// middlewares
app.use(express.json());
app.use(cors());
app.use("/",(req,res,next) => {
    console.log("path",req.path,req.method);
    next();
})
app.use("/api/workouts",workoutRoute);

// connecting to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // server
        app.listen(PORT, () => {
            console.log("Connected to db and server is running at ", PORT, "...");
        })
    })
    .catch((err) => {
        console.log("Db error : ", err);
    })