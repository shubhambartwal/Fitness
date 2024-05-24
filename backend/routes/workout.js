const express= require('express')
const { createWorkout, getWorkout, getAllWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const router= express.Router()

//get all workouts
router.get('/',getAllWorkouts)

//get single workout
router.get('/:id',getWorkout)

//add a workout
router.post('/',createWorkout)

//delete workout
router.delete('/:id',deleteWorkout)

//update the workout
router.patch('/:id',updateWorkout)


module.exports=router