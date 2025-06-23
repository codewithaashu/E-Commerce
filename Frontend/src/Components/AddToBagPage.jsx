import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Redux/Action';
import Swal from 'sweetalert2'
import { BASE_URL,RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET } from '../Secret';
import { useNavigate } from 'react-router';
const AddToBagPage = () => {
  const user = useSelector((state) => state.setUserFunc.user);
  const dispatch = useDispatch();
  let totalMRP = 0;
  let discount = 0;
  const navigate = useNavigate();
  useEffect(() => {
    return async () => {
      const user = await axios.get(`${BASE_URL}/product/user/?phone=${localStorage.getItem("phone")}`).catch((err) => { console.log("error is : " + err); })
      dispatch(setUser(user.data.user));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [user.addToCartProduct.length]);
  const removeToBag = async (_id) => {
    const res = await axios.post(`${BASE_URL}/product/removetoBag`, {
      _id: _id,
      phone: localStorage.getItem("phone")
    }).catch((err) => console.log(err));
    dispatch(setUser(res.data));
  }
  const placedOrder = async(totalAmount)=>{
    //when we click on placed order, payment page will open and product will be checkout
    //send the total amount of order to razorpay . so we need an api
  //   const orderInfo = await axios.post(`${BASE_URL}/product/checkout`,{
  //       amount:totalAmount
  //   })
  //   const {amount,id}=orderInfo.data.orderInfo;
  //   console.log(orderInfo.data.orderInfo);
  //   //open the popup of razorpay
  //   //so we have to add a script tag in our index.html file
  //   //now we customise the popup with the options(key -value pais)
  //   const options = {
  //     // Enter the Key ID generated from the Dashboard
  //     key: RAZORPAY_KEY_ID, 
  //     // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     amount:amount, 
  //     currency: "INR",
  //     name: "Myntra Baazar",
  //     description: "Buy products from Myntra Baazar",
  //     image: "https://constant.myntassets.com/pwa/assets/img/Icon-App-60x60@3x_2021.png",
  //     //Pass the `id` obtained in the response
  //     order_id:id,
  //     //for confirmation the payment we request an api
  //     callback_url: `${BASE_URL}/product/paymentVerification`,
  //     prefill: {
  //         "name": user.fullName,
  //         "email": user.email,
  //         "contact": user.phone
  //     },
  //     "notes": {
  //         "address": "Indore"
  //     },
  //     "theme": {
  //         "color": "rgb(255, 63, 108)"
  //     }
  // };
  // console.log(options);
  // const razor = new window.Razorpay(options)
  // razor.open();
    await Swal.fire('Your order is successfully Placed');
    const res =await axios.post(`${BASE_URL}/product/placedOrder`,{
      phone:localStorage.getItem("phone")
    }).catch((err)=>console.log(err))
    dispatch(setUser(res.data));
    navigate("/confirmorder");
  }
  return (
    <>
      <div className="addToBagPage-cont row row-cols-1 row-cols-sm-2 row-cols-md-5 cols-lg-6 mt-4">
        <div className="addToBag-left-block">
          <div className="address">
            <div className="address-strip">
              <div className="address-base-title">
                Deliver to
                <span>{user.fullName}</span>
                <span>, 452001</span>
              </div>
              <div className="address-sub-text">
                Tripuri hostel, Lnct group of colleges bhopal, kalchuri nagar, nr. Hanuman mandir, Bhopal, Bhopal
              </div>
            </div>
            <button className='changeAddressBtn'>
              <div className="changeAddressBtnText">CHANGE ADDRESS</div>
            </button>
          </div>

          <div className="shipping-tip">
            <div className="shipping-banner-img">
              <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt="Shipping banner" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="shipping-tip-msg">
              Yay!
              <span>
                &nbsp;
                No convenience fee
                &nbsp;
              </span>
              on this order.
            </div>
          </div>
          <div className="addtocart-box">
            {user.addToCartProduct.map((curr) => {
              totalMRP += curr.originalPrice;
              discount+= curr.originalPrice-curr.discountedPrice;
              return (<div className="cart-item" key={curr._id}>
                <div className="cart-img">
                  <img src={curr.searchImage} alt="Product pic" width={"100%"} height={"100%"} />
                </div>
                <div className="cart-item-details">
                  <div className='cart-item-brand'>{curr.brand}</div>
                  <div className="cart-item-title">{curr.subTitle}</div>
                  <div className="price">
                  {`Rs ${curr.discountedPrice}`}<span className='mp-price'>{`Rs. ${curr.originalPrice}`}</span> <span className='discount'>{"("+Math.round(((curr.originalPrice-curr.discountedPrice)/curr.originalPrice)*100)+"% OFF)"}</span>
                  </div>
                  <div className="return-period">
                    <i className="fa fa-undo" aria-hidden="true" style={{ color: "black", height: "100%" }} ></i>
                    <div className="return-text">
                      <span style={{ fontWeight: "600", marginRight: "5px" }}>14 days</span>
                      return available
                    </div>
                  </div>
                  <div className="delivery-msge-box">
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#03a685" }}></i>
                    &nbsp; Deliver by <span style={{ fontWeight: "600", marginRight: "5px" }}>29 Mar 2023</span>
                  </div>
                </div>

                <div className="wishlist-close-btn">
                  <i className="fa-solid fa-circle-xmark" onClick={() => removeToBag(curr._id)}></i>
                </div>
              </div>
              )
            })}
          </div>
        </div>
        <div className="addToBag-right-block">
          <div className="price-cont">
            <div className="price-head">
              PRICE DETAILS ({`${user.addToCartProduct.length} Items`})
            </div>
            <div className="price-breakup">
              <div className="priceDetail">
                <span>Total MRP</span>
                <span className="price-value">{`Rs. ${totalMRP}`}</span>
              </div>
              <div className="priceDetail">
                <span>Discount on MRP</span>
                <span className="price-value" style={{ color: "#03a685" }}>-{`Rs. ${discount}`}</span>
              </div>
              <div className="priceDetail">
                <span>Coupon Discount</span>
                <span className="price-value" style={{ color: "rgb(255, 63, 108)" }}>-Rs 0</span>
              </div>
              <div className="priceDetail">
                <span>Convenience Fee</span>
                <span className="price-value" style={{ textDecoration: "line-through" }}>Rs 99<span className='price-value' style={{ color: "#03a685", marginLeft: "4px" }}>FREE</span>
                </span>
              </div>
            </div>
          </div>
          <div className="total-price-box">
            <span>Total Amount</span>
            <span className="price-value">{`Rs. ${(totalMRP-discount).toFixed(2)}`}</span>
          </div>
          <div className='mt-4'>
            <button className="place-order-btn" onClick={()=>placedOrder((totalMRP-discount).toFixed(2))}>Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToBagPage
