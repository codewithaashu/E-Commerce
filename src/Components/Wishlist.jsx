import Navbar from './Navbar'
import WishlistEmpty from './WishlistEmpty'
import WishlistPage from './WishlistPage'
import React from 'react'
import { useSelector } from 'react-redux';
const Wishlist = () => {
    const user = useSelector((state)=>state.setUserFunc.user);
  return (
    <>
        <Navbar/>
        {
            user.wishlistProduct===undefined?<WishlistEmpty heading={"PLEASE LOG IN"} title={"Login to view items in your wishlist."} btnTitle={"Login"} navigateLink={"/login"}/>:
            user.wishlistProduct.length===0?
            <WishlistEmpty heading={"YOUR WISHLIST IS EMPTY"} title={"Add items that you like to your wishlist. Review them anytime and easily move them to the bag."} btnTitle={"CONTINUE SHOPPING"} navigateLink={"/"}/>:<WishlistPage/>
        }
    </>
  )
}

export default Wishlist