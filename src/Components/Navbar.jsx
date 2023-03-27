import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const data = useSelector((state)=>state.setUserFunc.user);
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{padding:"0px"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand " to={"/"}> <img className='myntra-logo' src="https://pixlok.com/wp-content/uploads/2021/10/Myntra-Logo-PNG-ovjndf3.jpg" alt="Myntra" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link li-text" aria-current="page" to={"/categories/men's clothing"}>Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link li-text" aria-current="page" to={"/categories/women's clothing"}>Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link li-text" aria-current="page" to={"/categories/electronics"}>Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link li-text" aria-current="page" to={"/categories/jewelery"}>Jewelery</Link>
                            </li>
                        </ul>
                        <form className="d-flex searchBox" role="search">
                            <Link className="nav-link icon-box" aria-current="page" to={"/"} style={{justifyContent:"center"}}>
                            <i className="fa-solid fa-magnifying-glass"></i>                            
                            </Link>
                            <input className="form-control me-2 inputBox" type="search" placeholder="Search for products, brands and more" aria-label="Search"/>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link icon-box" aria-current="page" to={"/login"}>
                                    <i className="fa-regular fa-user"></i>
                                    <span>{data.length===0 ?"Profile":data.fullName}</span>
                                </Link>
                            </li>
                            <li className="nav-item icon-box">
                            <Link className="nav-link icon-box" aria-current="page" to={"/wishlist"}>
                                <i className="fa-regular fa-heart" ></i>
                                <span>Wishlist</span>
                            </Link>
                            </li>
                            <li className="nav-item icon-box">
                            <Link className="nav-link icon-box" aria-current="page" to={"/addtobag"}>
                                <i className="fa-solid fa-bag-shopping">
                                </i>                            
                                <span>Bag</span>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;