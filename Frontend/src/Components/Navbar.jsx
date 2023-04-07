import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearchProduct } from "../Redux/Action";
//import component and css for toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchProduct from "./SearchProduct";
const Navbar = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.setUserFunc.user);
  const navigate = useNavigate();
  const [desktop, setDesktop] = useState(true);
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
  };
  const navBtn = () => {
    localStorage.removeItem("phone");
    window.location.reload(true);
  };
  const fetchSearchItem = async (search) => {
    const item = await axios
      .get(`http://localhost:5000/product/search/${search}`)
      .catch((err) => console.log(err));
    if (item.data.length === 0) {
      errorToast("We couldn't find any matches.");
      navigate("/");
    } else {
      dispatch(fetchSearchProduct(item.data));
      navigate("/search");
    }
  };
  const searchItem = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let searchQuery = e.target.value;
      fetchSearchItem(searchQuery);
      setInputVal("");
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ padding: "0px" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none " }}
          >
            <span
              className="navbar-toggler-icon"
              onClick={() => setDesktop(false)}
            ></span>
          </button>
          <Link className="navbar-brand " to={"/"}>
            {" "}
            <img
              className="myntra-logo"
              src="https://pixlok.com/wp-content/uploads/2021/10/Myntra-Logo-PNG-ovjndf3.jpg"
              alt="Myntra"
            />{" "}
          </Link>
          {desktop ? (
            <>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link li-text"
                      aria-current="page"
                      to={"/categories/mens"}
                    >
                      Men
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link li-text"
                      aria-current="page"
                      to={"/categories/womens"}
                    >
                      Women
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link li-text"
                      aria-current="page"
                      to={"/categories/kids"}
                    >
                      Kids
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link li-text"
                      aria-current="page"
                      to={"/categories/electronics"}
                    >
                      Electronics
                    </Link>
                  </li>
                </ul>
                <form className="d-flex searchBox" role="search">
                  <Link
                    className="nav-link icon-box"
                    aria-current="page"
                    to={"/"}
                    style={{ justifyContent: "center" }}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
                  <input
                    className="form-control me-2 inputBox"
                    type="search"
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyPress={(e) => searchItem(e)}
                    value={inputVal}
                    placeholder="Search for products, brands and more"
                    aria-label="Search"
                  />
                </form>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item loginBtn_container">
                    <Link
                      className="nav-link icon-box nav-hover"
                      aria-current="page"
                      to={"/login"}
                    >
                      <i className="fa-regular fa-user"></i>
                      <span>Profile</span>
                    </Link>
                    <div className="login_menu">
                      <div className="content-info">
                        <div className="nav-infoTitle">
                          {user.length === 0
                            ? "Welcome"
                            : `Hello ${user.fullName}`}
                        </div>
                        <div className="nav-infoSubTitle">
                          {user.length === 0
                            ? "To access account and manage orders"
                            : `${user.phone}`}
                        </div>
                      </div>
                      <div className="nav-btn">
                        <Link
                          className="nav-login-btn  "
                          to={"/login"}
                          onClick={user.length !== 0 ? navBtn : ""}
                        >
                          {user.length === 0 ? "Login/Signup" : `Logout`}
                        </Link>
                      </div>
                      <div className="nav-popup-list-box">
                        <Link className="nav-popup-list my-1" to={"/addtobag"}>
                          Add to Bag
                        </Link>
                        <Link className="nav-popup-list" to={"/wishlist"}>
                          Wishlist
                        </Link>
                        <a
                          className="nav-popup-list my-1"
                          href="https://www.linkedin.com/in/ashishranjan1626/"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="mobile-nav-box" onClick={() => setDesktop(true)}>
              <div className="mobile-nav-box scroll-nav">
                <div className="mobile-nav">
                  <div className="mobile-nav-img-box">
                    {
                      user.length===0?(
                        <img
                          src="http://assets.myntassets.com/dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/1/25/a1bd0077-bedc-4b6e-a040-90789747dd881674670405165-offer-banner-400-1080x496-code-_-MYNTRA300.jpg"
                          alt="HeadImg"
                        />
                      ):(
                        <div>
                          <i class="fa-solid fa-user fa-2xl"></i>
                        </div>
                      )
                    }
                  </div>
                  {
                    user.length!==0?(
                  <div className="mobile-nav-username">
                    <div>{user.fullName}</div>
                  </div>

                    ):""
                  }
                  <div className="mobile-nav-loginBtn">
                  <Link
                          className={user.length===0?"nav-login-btn":"nav-login-btn text-white"}
                          to={"/login"}
                          onClick={user.length !== 0 ? navBtn : ""}
                        >
                          {user.length === 0 ? "Login/Signup" : `Logout`}
                        </Link>
                    {/* <Link to={"/login"}>Login/Signup</Link> */}
                  </div>
                  <div className="mobile-nav-ul mt-2 pt-2">
                    <div className="mobile-nav-li">
                      <Link to={"/categories/mens"}>Men</Link>
                    </div>
                    <div className="mobile-nav-li">
                      <Link to={"/categories/womens"}>Women</Link>
                    </div>
                    <div className="mobile-nav-li">
                      <Link to={"/categories/kids"}>Kids</Link>
                    </div>
                    <div className="mobile-nav-li">
                      <Link to={"/categories/electronics"}>Electronics</Link>
                    </div>
                    <div className="mobile-nav-li">
                      <Link to={"/categories/electronics"}>Footwear</Link>
                    </div>
                    <div className="mobile-nav-li">
                      <Link to={"/categories/electronics"}>Jewellary</Link>
                    </div>
                  </div>
                  <div className="mobile-nav-info-ul">
                    <div className="mobile-nav-info-li">
                      <a
                        href="https://www.linkedin.com/in/ashishranjan1626/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="mobile-nav-info-li">
                      <a
                        href="https://chatwithaashu.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        FAQ
                      </a>
                    </div>
                    <div className="mobile-nav-info-li">
                      <a
                        href="https://www.myntra.com/tac"
                        target="_blank"
                        rel="noreferrer"
                      >
                        T&C
                      </a>
                    </div>
                    <div className="mobile-nav-info-li">
                      <a
                        href="https://codewithaashu.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Blog
                      </a>
                    </div>
                    <div className="mobile-nav-info-li">
                      <a
                        href="https://codewithaashu.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Blog
                      </a>
                    </div>
                    <div className="mobile-nav-info-li">
                      <a
                        href="https://www.myntra.com/privacypolicy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mobile-ul">
            <li className="nav-item icon-box">
              <Link
                className="nav-link icon-box"
                aria-current="page"
                to={"/wishlist"}
              >
                <i className="fa-regular fa-heart"></i>
                <span>Wishlist</span>
              </Link>
            </li>
            <li className="nav-item icon-box">
              <Link
                className="nav-link icon-box"
                aria-current="page"
                to={"/addtobag"}
              >
                <i className="fa-solid fa-bag-shopping"></i>
                <span>Bag</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
