//define all the controller corresponding to all route
const Product = require("../DB/ProductModel");
const Users = require("../DB/UserModel");
const jwt = require("jsonwebtoken");
const getAllProduct = async (req, res) => {
    //if there is any query in url
    //get the query 
    const { category, id } = req.query;
    //define the queryObject 
    const queryObject = {};
    if (category) {
        queryObject.category = category;
    }
    if (id) {
        idFix = Number(id);
        queryObject.id = idFix;
    }
    //get json data from collection
    const products = await Product.find(queryObject);
    //send and display the data as json
    res.status(200).json({ products });
}

const registeredUser = async (req, res) => {
    try {
        //now the req.body data will save in user db
        const { email, password, phone, fullName, gender } = req.body;
        //check this email and phone number already exist
        let user = await Users.findOne({phone:phone});
        if (user) {
            return res.send("Already Registered");
        }
        //if user is not registered then store their data in database
        //generate token
        const token = await jwt.sign({_id:new Date().getTime().toString()},"mynameisashishranjan");
        //create user
        user = new Users({
            email, password, phone, fullName, gender,tokens:{token:token}
        })
        //save user
        const data = await user.save();
        res.send("Successfully Registered");
    }
    catch (err) {
        console.log("Error :" + err);
    }
}

const loginUser =async(req,res)=>{
    //here frontend data and db data will compare
    const {phone,password}= req.body;
    const user = await Users.findOne({phone:phone});
    if(user){
        //match user password and typed password
        const typedPassword = password;
        const dbPassword = user.password;
        if(typedPassword===dbPassword){
            res.send("Login success");
        }else{
            res.send("Password not match");
        }
    }else{
        res.send("User not exist");
    }
}
const getUserData = async(req,res)=>{
    const {phone}=req.query;
    const user = await Users.findOne({phone:phone});
    res.status(200).json({user});
}
const addWishlist = async(req,res)=>{
    try{
        //wishlist product will save in user collection
        const {product,token}=req.body;
        if(token){
            //get the user collection using token
            const user = await Users.findOne({phone:token});
            
            //check whether the product is already in wishlist product array or not
            if(user.wishlistProduct.length==0){
                console.log(user.wishlistProduct.length);
                user.wishlistProduct = product;
            }
            else if(!user.wishlistProduct.some((curr)=>{return curr._id===product._id})){
                //if product is not in array
                //add product in user's wishlistProduct array
                user.wishlistProduct=user.wishlistProduct.concat(product);
                // //update the user collection
            }
            await user.save();
            console.log(user);
            res.send("added");
        }
    }catch(err){
        console.log("Error : "+err);
    }
}
const addToCart = async(req,res)=>{
    try{
        //add to cart product will save in user collection
        //get query
        const {product,token}=req.body;
        if(token){
            //get the user collection using token
            const user = await Users.findOne({phone:token});
            
            //check whether the product is already in addToCart product array or not
            if(!user.addToCartProduct.some((curr)=>{return curr._id===product._id})){
                //if product is not in array
                //add product in user's wishlistProduct array
                user.addToCartProduct=user.addToCartProduct.concat(product);
                // //update the user collection
                await user.save();
            }
            res.send("added");
        }
    }catch(err){
        console.log("Error : "+err);
    }
}
const updateWishlist = async(req,res)=>{
    const {_id,phone}= req.body;
    //get user collection by using phone field
    const user = await Users.findOne({phone:phone});
    user.wishlistProduct = user.wishlistProduct.filter((curr)=>{
        return curr._id !==_id;
    })
    await user.save();
    res.send(user);
}
const updateBag= async(req,res)=>{
    const {_id,phone}= req.body;
    //get user collection by using phone field
    const user = await Users.findOne({phone:phone});
    user.addToCartProduct = user.addToCartProduct.filter((curr)=>{
        return curr._id !==_id;
    })
    await user.save();
    res.send(user);
}
//export the controller
module.exports = { getAllProduct, registeredUser,loginUser,addWishlist,addToCart,getUserData,updateWishlist,updateBag };