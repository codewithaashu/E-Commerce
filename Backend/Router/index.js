//to create a router we require express
const express = require("express");
//create the router instance
const router = express.Router();
const {getAllProduct,registeredUser,loginUser,addWishlist,addToCart,getUserData,updateWishlist,updateBag,placedOrderBag,getSearchItem,checkoutProduct,paymentVerification,getOrderInfo}= require("../Controller/index")
//define the path and what have to do on that path
router.route("/").get(getAllProduct);//when we hit this url json data will display
router.route("/register").post(registeredUser);
router.route("/login").post(loginUser); 
router.route("/wishlist").post(addWishlist);
router.route("/addtocart").post(addToCart);
router.route("/user").get(getUserData);
router.route("/removetowishlist").post(updateWishlist);
router.route("/removetobag").post(updateBag);
router.route("/placedOrder").post(placedOrderBag);
// router.route("/search/:name").get(getSearchItem) //if you search through only name
router.route("/search/:key").get(getSearchItem) //if you search through only name
//for checkout
//we integrate the razorpay payment integration
//so we have to install razorpay package . "npm i razorpay"
router.route("/checkout").post(checkoutProduct);
//for payment verifcation
router.route("/paymentVerification").post(paymentVerification);
//get order id
router.route("/orderinfo").get(getOrderInfo);
//export the router to use in other file
module.exports = router;
