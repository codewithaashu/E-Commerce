const mongoose = require("mongoose");

//define the schema of Product
const ProductSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true   
    },
    title:String,
    price:Number,
    category:String,
    description:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})
//model is basically a collection. so we have to pass collection name and the structure of collection
const Product = new mongoose.model("Products",ProductSchema);
module.exports = Product;