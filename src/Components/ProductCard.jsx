import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
  return (
    <>
      {

        data.map((curr) => {
          const {id,_id,image,title,price}=curr;
          return (
            <div className="col card-box" key={_id}>
              <div className="card" style={{ width: "220px", maxHeight: "500px" }}>
                <Link className='link' to={`/products/${id}`} >
                  <div className="img-box">
                    <img src={image} className="card-img-top" alt="Shirt Photo" style={{ height: "280px", width: "100%" }} />
                    <div className="rating-box">
                      {curr.rating.rate} <span className="fa fa-star" style={{ color: "#15958E" }}></span> | <span>{curr.rating.count}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="brand-name">
                      Roadster
                    </h3>
                    <h4 className="card-text">{title.slice(0, 20) + " ..."}</h4>
                    <div className="price">
                      {`Rs. ${price}`}<span className='mp-price'>Rs. 1599</span> <span className='discount'>(58% off)</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default ProductCard