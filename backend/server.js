const express= require('express')
const mongoose= require('mongoose')
const cors = require('cors');
const workoutRouter= require('./routes/workout')
//to access env file
require('dotenv').config()

//express app
const app= express();

//middleware
//cors
app.use(cors())
//middleware to get access of req body
app.use(express.json())
//middleware to log all the path and req which we are executing
app.use((req,res,next)=>{
    console.log(req.path,req.method)
next()
})

//routes
app.use('/api/workouts',workoutRouter)

//connect our DB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to DB')
  
  //We will only listen these requests if we are connected to DB
    //listening to port 4000
app.listen(process.env.PORT,()=>{
    console.log('app is listening to port 4000')
})
}).catch((err)=>console.log(err))
