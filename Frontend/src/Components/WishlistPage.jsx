import axios from 'axios';
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/Action';
//import component and css for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WishlistPage = () => {
    const user = useSelector((state)=>state.setUserFunc.user);
    const dispatch = useDispatch();
    const successToast = (msg)=>{
        toast.success(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    useEffect(() => {
      return async() => {
        const user = await axios.get(`http://localhost:5000/product/user/?phone=${localStorage.getItem("phone")}`).catch((err)=>{console.log("error is : "+err);})
        dispatch(setUser(user.data.user));
      }
    },[user.wishlistProduct.length])
    const removeToWishlist = async(_id)=>{
        const res = await axios.post("http://localhost:5000/product/removetowishlist",{
            _id:_id,
            phone:localStorage.getItem("phone")
        }).catch((err)=>console.log(err));
        dispatch(setUser(res.data));
    }
    const moveToBag =async(product)=>{
        const res = await axios.post("http://localhost:5000/product/removetowishlist",{
            _id:product._id,
            phone:localStorage.getItem("phone")
        }).catch((err)=>console.log(err));
        dispatch(setUser(res.data));
        await axios.post("http://localhost:5000/product/addtocart",{
            product:product,
            token:user.phone
        }).then((res)=>res.data==="not login"?"":successToast("Product is  added to cart")).catch((err)=>console.log(err));
    }
    return (
        <>
            <div className="wishlist-page-cont">
                <div className="wishlist-page-box">
                    <div className="wishlist-page-heading">
                        <span className='wishlist-page-title'>My Wishlist</span>
                        <span className='wishlist-page-title' style={{ fontWeight: "400" }}>&nbsp;{user.wishlistProduct.length} items</span>
                    </div>
                    <div className="wishlist-product-box">
                        {
                            user.wishlistProduct.map((curr)=>{
                                return(
                                    <div className="wishlist-product-card" key={curr._id}>
                                    <div className="wishlist-prd-image">
                                        <Link to="/">
                                            <img src={curr.image} alt="" />
                                        </Link>
                                    </div>
                                    <div className="wishlist-close-btn">
                                        <i className="fa-solid fa-circle-xmark" onClick={()=>removeToWishlist(curr._id)}></i>
                                    </div>
                                    <div className="wishlist-prd-details">
                                        <div className='wishlist-prd-title'>
                                            {curr.title}
                                        </div>
                                        <div className="price pt-2" style={{ textAlign: "center" }}>
                                            {`Rs ${curr.price}`}<span className='mp-price'>Rs. 1599</span> <span className='discount'>(58% off)</span>
                                        </div>
                                        <div className="move-to-bag">
                                            <Link className="move-btn link" onClick={()=>moveToBag(curr)}>Move to Bag</Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
   
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default WishlistPage