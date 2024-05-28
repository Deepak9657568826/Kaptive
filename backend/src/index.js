
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { ConnectionToDB } = require('./config/dbConnection');
const { userRouter } = require('./routes/userRoutes');


const app=express();
app.use(express.json())
app.use(cors())
app.use('/users',userRouter)


const PORT = process.env.PORT || 1234


app.listen(PORT, async ()=>{
    try {
         await ConnectionToDB()
        console.log(`server is running at port ${PORT}`)   
    } catch (error) {
      console.log(error)  
    }  
})