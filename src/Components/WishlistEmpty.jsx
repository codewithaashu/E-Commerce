import React from 'react'
import { Link } from 'react-router-dom'

const WishlistEmpty = ({heading,title,btnTitle,navigateLink}) => {
    return (
        <>
            <div className='wishlist-cont p-3'>
                <div className='wishlist-box'>
                    <div className="wishlist-heading">
                        {heading}
                    </div>
                    <div className="wishlist-title">
                        {title}
                    </div>
                    <div >
                        <img src="https://www.pavejewelers.com/assets/images/empty-wishlist.png" alt="Empty Box" className="empty-box my-2" />
                    </div>
                    <div className='mt-3'>
                        <Link to={navigateLink} className='wishlist-empty-btn'>{btnTitle}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishlistEmpty