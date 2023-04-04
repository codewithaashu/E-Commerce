import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Redux/Action';
import Swal from 'sweetalert2'
const AddToBagPage = () => {
  const user = useSelector((state) => state.setUserFunc.user);
  const dispatch = useDispatch();
  let totalMRP = 0;
  let discount = 0;
  useEffect(() => {
    return async () => {
      const user = await axios.get(`http://localhost:5000/product/user/?phone=${localStorage.getItem("phone")}`).catch((err) => { console.log("error is : " + err); })
      dispatch(setUser(user.data.user));
    }
  }, [user.addToCartProduct.length]);
  const removeToBag = async (_id) => {
    const res = await axios.post("http://localhost:5000/product/removetoBag", {
      _id: _id,
      phone: localStorage.getItem("phone")
    }).catch((err) => console.log(err));
    dispatch(setUser(res.data));
  }
  const placedOrder = async()=>{
    Swal.fire('Your order is successfully Placed');
    const res =await axios.post("http://localhost:5000/product/placedOrder",{
      phone:localStorage.getItem("phone")
    }).catch((err)=>console.log(err))
    dispatch(setUser(res.data));
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
              totalMRP += 1599;
              discount+= 1599-curr.price;
              return (<div className="cart-item" key={curr._id}>
                <div className="cart-img">
                  <img src={curr.image} alt="Product image" width={"100%"} height={"100%"} />
                </div>
                <div className="cart-item-details">
                  <div className='cart-item-brand'>Roadster</div>
                  <div className="cart-item-title">{curr.title}</div>
                  <div className="price">
                    {`Rs. ${curr.price}`}<span className='mp-price'>Rs. 1599</span> <span className='discount'>(58% off)</span>
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
            <button className="place-order-btn" onClick={placedOrder}>Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToBagPage