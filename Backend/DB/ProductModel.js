const mongoose = require("mongoose");

//define the schema of Product
const ProductSchema = new mongoose.Schema({
    index:{
        type:Number,
        unique:true,
        required:true
    },
    category:String,
    productDetails:String,
    brand:String,
    title:String,
    subTitle : String,
    originalPrice:Number,
    discountPercentage:String,
    discountedPrice:Number,
    rating:Number,
    ratingCount:Number,
    searchImage:String,
    isFeatured:Boolean
})
//model is basically a collection. so we have to pass collection name and the structure of collection
const Product = new mongoose.model("Products",ProductSchema);
module.exports = Product;