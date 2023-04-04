import React from 'react'
import { Link } from 'react-router-dom'
const AddToBagEmpty = () => {
  return (
    <>
<div className='wishlist-cont p-3'>
                <div className='wishlist-box'>
                    <div >
                        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="Empty Box" className="empty-box my-2" />
                    </div>
                    <div className="wishlist-heading">
                    Hey, it feels so light!
                    </div>
                    <div className="wishlist-title" style={{fontSize:"12px"}}>
                    There is nothing in your bag. Let's add some items.
                    </div>
                    <div className='mt-3'>
                        <Link to="/wishlist" className='addToBtn-empty-btn link'>ADD ITEMS FROM WISHLIST</Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AddToBagEmpty