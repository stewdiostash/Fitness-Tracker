const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

router.get("/workouts", (req, res) => {
  Workout.find()
  .then((foundWorkouts) => {
      res.json(foundWorkouts)
  })
  .catch((err) => {
    res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workouts.",
      });
  })
})

router.get("/workouts/range", (req, res) => {
    Workout.find().limit(7)
    .then((foundWorkouts) => {
        res.json(foundWorkouts)
    })
    .catch((err) => {
      res.json({
          error: true,
          data: null,
          message: "Failed to retrieve workouts.",
        });
    })
  })





module.exports = router;
