import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../Redux/Action';
//import component and css for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.setUserFunc.user);
    const navigate = useNavigate();
    
    const errorToast = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const navBtn = ()=>{
        localStorage.removeItem("phone"); 
        window.location.reload(true)
    }
    const fetchSearchItem = async (search) => {
        console.log("working");
        const item = await axios.get(`http://localhost:5000/product/search/${search}`).catch((err) => console.log(err));
        if (item.data.length == 0) {
            errorToast("We couldn't find any matches.");
            navigate("/");
        } else {
            console.log(item);
            dispatch(fetchAllProducts(item.data));
        }
    }
    const searchItem = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            let searchQuery = e.target.value;
            fetchSearchItem(searchQuery);
            setInputVal("")
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ padding: "0px" }}>
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
                            <Link className="nav-link icon-box" aria-current="page" to={"/"} style={{ justifyContent: "center" }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                            <input className="form-control me-2 inputBox" type="search" onChange={(e) => setInputVal(e.target.value)} onKeyPress={(e) => searchItem(e)} value={inputVal} placeholder="Search for products, brands and more" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item loginBtn_container">
                                <Link className="nav-link icon-box nav-hover" aria-current="page" to={"/login"}>
                                    <i className="fa-regular fa-user"></i>
                                    <span>Profile</span>
                                </Link>
                                <div className="login_menu">
                                    <div className="content-info">
                                        <div className="nav-infoTitle">
                                            {user.length===0?"Welcome":`Hello ${user.fullName}`}
                                        </div>
                                        <div className="nav-infoSubTitle">
                                        {user.length===0?"To access account and manage orders":`${user.phone}`}
                                        </div>
                                    </div>
                                    <div className="nav-btn">
                                        <Link className='nav-login-btn  'to={"/login"} onClick={user.length!=0?navBtn:""}>
                                        {user.length===0?"Login/Signup":`Logout`}</Link>
                                    </div>
                                    <div className="nav-popup-list-box">
                                    <Link className='nav-popup-list my-1' to={"/addtobag"}>Add to Bag</Link>
                                    <Link className='nav-popup-list' to={"/wishlist"}>Wishlist</Link>
                                    <a className='nav-popup-list my-1' href="https://www.linkedin.com/in/ashishranjan1626/" target={"_blank"}>Contact Us</a>
                                    </div>
                                </div>
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
            <ToastContainer/>
        </>
    )
}

export default Navbar;