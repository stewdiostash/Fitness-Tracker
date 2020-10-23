const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required",
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
},
{
  toJSON: {
    virtuals: true
  } 
}
);

WorkoutSchema.virtual("totalDuration").get(function() {
  let totalMin = 0;
  for (let i = 0; i < this.exercises.length; i++){
    totalMin += this.exercises[i].duration;
  }
  return totalMin
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
