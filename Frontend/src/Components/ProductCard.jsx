import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
  return (
    <>
      {

        data.map((curr) => {
          const {index,_id,searchImage,subTitle,discountedPrice,rating,ratingCount,brand,originalPrice,discountPercentage}=curr;
          return (
            <div className="col card-box" key={_id}>
              <div className="card" style={{ width: "220px", maxHeight: "500px" }}>
                <Link  to={`/products/${index}`} >
                  <div className="img-box">
                    <img src={searchImage} className="card-img-top" alt="Shirt Photo" style={{ height: "280px", width: "100%" }} />
                    <div className="rating-box">
                      {rating.toFixed(1)} <span className="fa fa-star" style={{ color: "#15958E" }}></span> | <span>{ratingCount<1000?ratingCount:((ratingCount/1000).toFixed(1)+"K")}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="brand-name">
                      {brand}
                    </h3>
                    <h4 className="card-text">{subTitle}</h4>
                    <div className="price">
                      {`Rs. ${discountedPrice}`}<span className='mp-price'>{`Rs. ${originalPrice}`}</span> <span className='discount'>{"("+Math.round(((originalPrice-discountedPrice)/originalPrice)*100)+"% OFF)"}</span>
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