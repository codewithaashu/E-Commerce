import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
//import component and css for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../Redux/Action';
import Footer from './Footer';
import { BASE_URL } from '../Secret';
const ProductPage = () => {
    const productDetails = useSelector((state) => state.fetchProductDetailsFunc.product);
    const dispatch = useDispatch();
    let size = [30, 32, 34, 36, 38];
    let serviceInfo = ["100% Original Products", "Pay on delivery might be available", "Easy 14 days returns and exchanges", "Try & Buy might be available"];
    const user = useSelector((state) => state.setUserFunc.user);
    const successToast = (msg) => {
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
    const errorToast = (msg) => {
        toast.error(msg, {
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

    const addToCart = async () => {
        //when we click on btn then frontend send the product id and user name to backend
        //this work is done by api with post method

        //if user is not login
        if (user?.phone === undefined) {
            return errorToast("You are not login. Please,Try Again")
        }
        await axios.post(`${BASE_URL}product/addtocart`, {
            product: productDetails,
            token: user.phone
        }).then((res) => {
            dispatch(setUser(res.data));
            successToast("Product is  added to bag");
        }).catch((err) => console.log(err));
    }
    const addWishlist = async () => {
        //when we click on btn then frontend send the product id and user name to backend
        //so we need an api wit h post method
        //backend save the product with user collection

        //if user is not login
        if (user?.phone === undefined) {
            return errorToast("You are not login. Please,Try Again")
        }
        await axios.post(`${BASE_URL}product/wishlist`, {
            product: productDetails,
            token: user.phone
        }).then((res) => {
            dispatch(setUser(res.data));
            successToast("Product is  added to wishlist");
        }).catch((err) => console.log(err));
    }
    return (
        <>
            {/* data will not fetch till now then size will be 0 */}
            {productDetails.length === 0 ? (
                <Spinner />
            ) : (
                <>

                    <div className="container-fluid mt-5">
                        <div className="row pdp-cont">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-image-box">
                                <img className='px-2' src={productDetails.searchImage} alt="Product Pic" style={{ height: "90%", width: "90%" }} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 content-box px-3">
                                <div className="product-detail-box">
                                    <h1 className='pdp-title'>{productDetails.brand}</h1>
                                    <h1 className='pdp-name'>{productDetails.title}</h1>
                                </div>
                                <div className="pdp-price">
                                    <strong>Rs. {productDetails.discountedPrice}</strong><span className='mp-price'>MRP {productDetails.originalPrice}</span> <span className='discount'>{"("+Math.round(((productDetails.originalPrice-productDetails.discountedPrice)/productDetails.originalPrice)*100)+"% OFF)"}</span>
                                    <div className='pt-2'>
                                        <p className='pdf-info'>inclusive of all taxes</p>
                                    </div>
                                </div>
                                <div className="size-container">
                                    <div className="size-text">
                                        <h4 className='size'>Select Size</h4>
                                        <h1 className='size-chart'>Size chart</h1>
                                    </div>
                                    <div className="size-option mb-3" >
                                        {
                                            size.map((curr, index) => {
                                                return (
                                                    <div className="size-circle" key={index}>
                                                        <h4 className='size-circle-text'>{curr}</h4>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>
                                </div>
                                <div className="pdp-action-container">
                                    <div className="addToBag">
                                        <button className='addToBag-btn' onClick={addToCart}><i className="fa-solid fa-bag-shopping"  ></i>ADD TO BAG</button>
                                        <button className='wishlist-btn' onClick={addWishlist}><i className="fa-regular fa-heart" style={{ color: "black" }}></i>
                                            <span>WISHLIST</span></button>
                                    </div>
                                </div>
                                <div className="pincode-service-box" style={{ marginTop: "30px" }}>
                                    <div className="pincode-cont">
                                        <h4 className='pincode-head'>DELIVERY OPTIONS
                                            <i className="fa-solid fa-truck-fast" style={{ color: "black", marginLeft: "5px" }}></i>
                                        </h4>
                                        <form autoComplete='off' className='mt-3'>
                                            <input type="text" placeholder='Enter pincode' className='pincode-field' name='pincode' />
                                            <input type="submit" className='pincode-check' value={'check'} />
                                        </form>
                                        <p className='pincode-info'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                                    </div>
                                </div>
                                <div className="service-info-box">
                                    <ul>
                                        {
                                            serviceInfo.map((curr, index) => {
                                                return (
                                                    <li key={index}>
                                                        {curr}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="product-details-box" style={{border:"none"}}>
                                    <h4 className='pdp-details-title'>
                                        PRODUCT DETAILS
                                        <i className="far fa-file-alt" style={{ marginLeft: "6px" }}></i>
                                    </h4>
                                    <p className="pdp-details-description">
                                    Blue and beige checked casual shirt, has a spread collar, long sleeves, full button placket, curved hem, one patch pocket
                                    </p>
                                    <div className="pdp-sizeFitBox">
                                        <h4 className="pdp-sizeFit-title">
                                            Size & Fit
                                        </h4>
                                        <p className="pdp-sizeFit-description">
                                            Regular Fit
                                            <br />
                                            The model (height 6') is wearing a size 40
                                        </p>
                                    </div>
                                    <div className="pdp-sizeFitBox" >
                                        <h4 className="pdp-sizeFit-title">
                                            Material & Care
                                        </h4>
                                        <p className="pdp-sizeFit-description">
                                            100% cotton
                                            <br />
                                            Machine-wash
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
            <ToastContainer />
        </>
    )
}

export default ProductPage