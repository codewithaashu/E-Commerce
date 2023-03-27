import React from 'react'
import { Link } from 'react-router-dom'
const AddToBagNavbar = () => {
    return (
        <>
            <div className="header">
                <div className="atb-nav-cont px-2">
                    <div className="atb-nav-logo">
                        <Link className="navbar-brand " to={"/"}> <img className='myntra-logo' src="https://pixlok.com/wp-content/uploads/2021/10/Myntra-Logo-PNG-ovjndf3.jpg" alt="Myntra" /> </Link>
                    </div>
                    {/* <ol className="check-step-cont">
                        <li className="step step-active">
                            Bag
                        </li>
                        <li className="divider"></li>
                        <li className="step" style={{ margin: "0px 5px 0 6px" }}>Address</li>
                        <li className="divider"></li>
                        <li className="step" style={{ margin: "0px 0px 0 7px" }}>Payment</li>
                    </ol> */}
                    <div className="secure-cont">
                        <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="100% Secure" width={26} height={28} style={{ margin: "-7px 5px 0 0" }} />
                        <div className="secure">100% SECURE</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToBagNavbar