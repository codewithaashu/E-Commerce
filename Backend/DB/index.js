//to connect with DB, we require mongoose
const mongoose = require("mongoose");
//this url comes from mongo atlas
// const url = "mongodb+srv://codewithaashu:Ashish1608@ecommercedb.z7lzlpf.mongodb.net/?retryWrites=true&w=majority" -> now this data will comes from dotenv file for security purpose

//for using env data we have to require
require("dotenv").config();
//connect with db
const connectDB = ()=>{
    return mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Connection successful")).catch((err)=>{
        console.log("Error is : "+err);
    })
}
connectDB();
//to connect DB with express application we have to export the function
module.exports = connectDB;