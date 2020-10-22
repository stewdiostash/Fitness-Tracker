const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const { route } = require("./htmlRoutes");

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

router.post("/workouts", (req, res) => {
    Workout.create({})
    .then((newWorkout) => {
        res.json(newWorkout)
    })
    .catch((err) => {
        res.json({
            error: true,
            data: null,
            message: "Failed to create workout.",
          });
    })
})  

router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then((updatedWorkout) => {
        res.json(updatedWorkout)
    })
    .catch((err) => {
        res.json({
            error: true,
            data: null,
            message: "Failed to update workout.",
          });
    })
})



module.exports = router;
