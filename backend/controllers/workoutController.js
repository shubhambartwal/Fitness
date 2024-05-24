const mongoose = require("mongoose");
const Workout = require("../models/WorkoutModel");

//get all workout
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(402).json({ error: "not such workout id" });
  }
  try {
    const workout = await Workout.find({ _id: id });
    if (!workout) {
      res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// add a excercise to workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
//delete the exercise from the workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(402).json({ error: "Not a valid workout Id" });
  }
  try {
    const deletedWorkout = await Workout.findOneAndDelete({ _id: id });
    if (!deleteWorkout) {
      res.status(404).json({ error: "workout not found" });
    }
    res.status(200).json(deleteWorkout);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//update a exercise
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(402).json({ error: "Not a valid workout Id" });
  }
 try {
    const updatedWorkout =await  Workout.findOneAndUpdate({ _id: id }, { ...req.body });
 if(!updatedWorkout){
 return    res.status(402).json({msg:'workout not found'})
 }
res.status(200).json(updatedWorkout)
 } catch (error) {
res.status(404).json({error: error.message})    
 } };

module.exports = { createWorkout, getAllWorkouts, getWorkout, deleteWorkout ,updateWorkout};
