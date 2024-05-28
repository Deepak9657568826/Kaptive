require('dotenv').config()
const mongoose = require('mongoose')
const ConnectionToDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to db")
    } catch (error) {
       console.log(error) 
    }
}
module.exports = {ConnectionToDB}