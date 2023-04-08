import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const ConfirmOrder = () => {
  return (
    <>
      <div className="confirm-page">
        <div className="confirm-box">
          <h1>Your Order has been received</h1>
          <div className="img">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/31-512.png"
              alt="Green Icon"
              width={"120px"}
            />
          </div>
          <h4 className="text-center">Thank you for your Purchase</h4>
          <p className="text-center">Your order id is : </p>
          <div className="mt-3">
            <Link
              to={"/"}
              className="addToBtn-empty-btn"
              style={{ color: "white", background: "#ff3e6c" }}
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
