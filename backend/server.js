const express= require('express')
//express app
const app= express();

//routes
app.get('/',(req,res)=>{
    res.status(200).json({msg:'Welcome to / route'})
})

//listening to port 4000
app.listen(4000,()=>{
    console.log('app is listening to port 4000')
})