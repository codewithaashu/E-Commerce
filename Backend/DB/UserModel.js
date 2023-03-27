const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const userSchema= new  mongoose.Schema({
    email:{
        type: String,
        unique: true,
        validate(value){
            if(validator.isEmail(value)==false){
                throw new Error("Email is not valid");
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:5
    },
    phone:{
        type:Number,
        unique:true,
        required:true,
        minLength:10,
        maxLength:12
    },
    fullName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    tokens:[],
    wishlistProduct:[Object],
    addToCartProduct:[]
});

//generate token
userSchema.methods.generateToken= async function(){
    try{
        //token generate
        const token = await jwt.sign({_id:new Date().getTime().toString()},"mynameisashishranjan");
        // //save in collection
        // this.tokens = this.tokens.concat({token:token});
        // //save 
        await this.save();
        return token;
    }catch(err){
        console.log("Error "+err);
    }
}
const Users = new mongoose.model("Users",userSchema);
module.exports = Users;