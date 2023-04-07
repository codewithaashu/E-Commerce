//create server

//to create a server we have to require express
const express = require("express");
//create an object of express function
const app = express();
//export the db function
const {connectDB} = require("./DB/index");
const Product = require("./DB/ProductModel");
const productJSON = require("./products.json");
//for sending data from backend to frontend we use cors
//so we have to require cors
const cors = require("cors");

//define the port
const Port = process.env.PORT || 5000;

//for db
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//create the server i.e. request and response
app.get("/",(req,res)=>{
    res.send("Server is created by Ashish Ranjan")
})
//use the cors
app.use(cors());
//we use router so we have to import router
const productRouter = require("./Router/index");
app.use("/product",productRouter); //(router path,routerName) 

//listen the request
const start = async()=>{
    try{
        app.listen(Port,()=>{
            console.log(`Request is listening at port ${Port}`);
        })
        //connect DB with express js application
        await connectDB;
        //insert json file in DB collection
        await Product.create(productJSON);
        //to remove from duplicacy
        // await Product.deleteMany({});

    }catch(err){
        console.log("Error is "+ err);
    }
}
start();