const express= require('express')
const { createWorkout, getWorkout, getAllWorkouts, deleteWorkout } = require('../controllers/workoutController')
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
router.patch('/:id',(req,res)=>{
    res.json({msg:'workout is updated'})
})


module.exports=router