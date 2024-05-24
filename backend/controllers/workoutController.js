

const Workout = require("../models/WorkoutModel");

//get all workout
const getAllWorkouts=async(req,res)=>{
   try {
    const workouts= await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
   } catch (error) {
    res.status(400).json(error.message)
   }
}

//get a single workout
const getWorkout=async(req,res)=>{
    const {id}=req.params
    try {
        const workout= await Workout.find({_id:id})
        if(!workout)
        {
            res.status(404).json(
                {msg:'Data not found'}
            )
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


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
const deleteWorkout= async(req,res)=>{
const {id}=req.params
try{
    const deletedWorkout= Workout.deleteOne({_id:id})
    res.status(200).json(deleteWorkout)
}    
catch (error) {
        res.status(400).json(error.message)
    }
}

//update a exercise 
module.exports={createWorkout,getAllWorkouts,getWorkout,deleteWorkout}