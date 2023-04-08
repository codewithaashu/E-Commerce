const mongoose = require("mongoose");

//define the schema of Product
const OrderSchema = new mongoose.Schema({
    OrderID:{
        type:String,
        required:true
    },
    PaymentID:{
        type:String,
        required:true
    }
})
//model is basically a collection. so we have to pass collection name and the structure of collection
const Orders = new mongoose.model("Orders",OrderSchema);
module.exports = Orders;