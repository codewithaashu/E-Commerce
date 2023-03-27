import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import component and css for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../Redux/Action';
const LoginPage = () => {
    const [flow1, setFlow1] = useState(false);
    const [flow2, setFlow2] = useState(false);
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const errorToast = (msg)=>{
        toast.error(msg, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const changeUser=async(phone)=>{
        localStorage.setItem("isLogged",true);
        localStorage.setItem("phone",phone);

        //frontend send request to get user data by phone field  and then backend perform operation and send data of user
        const user = await axios.get(`http://localhost:5000/product/user/?phone=${phone}`).catch((err)=>{console.log("error is : "+err);})
        dispatch(setUser(user.data.user));
        navigate("/");
    }
    const loginData = async(e)=>{
        e.preventDefault();
        //when you submit the login data will send to backend
        //for send data to backend(api helps to communicate) we need api with post method
        await axios.post("http://localhost:5000/product/login",{phone,password}).then((res)=> res.data==="User not exist"?errorToast("User is not exist. You can create your Account."): res.data==="Login success"?changeUser(phone):errorToast("Your password will not matched. Try Again :)")).catch((err)=>console.log("login error is :"+err));        
    }
    return (
        <>
            <div className="login-cont">
                <div className="login-box">
                    <div className="login-head">
                        Login to your account
                    </div>
                    <form action="" className='form-box' autoComplete="off" onSubmit={loginData}>
                        <div className="form-group">
                            <input type="text" name="phone" autoComplete='false' onFocus={() => setFlow1(true)} onBlur={() => !phone?setFlow1(false):setFlow1(true)}  onChange={(e)=>setPhone(e.target.value)}/>
                            <span className={`placeholderText ${flow1 === true ? "focusText" : ""}`}>
                                Mobile Number
                                <span style={{ color: "rgb(255, 87, 34)" }}>*</span>
                            </span>
                        </div>
                        <div className="form-group">
                            <input type="password" name='password' autoComplete='false' onFocus={() => setFlow2(true)} onBlur={() => !password?setFlow2(false):setFlow2(true)} onChange={(e)=> setPassword(e.target.value)}/>
                            <span className={`placeholderText ${flow2 === true ? "focusText" : ""}`}>
                                Password
                                <span style={{ color: "rgb(255, 87, 34)" }}>*</span>
                            </span>
                        </div>
                        <div className="form-group">
                            <button type='submit' className="loginBtn">LOGIN</button>
                        </div>
                    </form>
                    <div className="forgot">
                        Forgot your password?&nbsp;
                        <Link to="/" className="reset link">Reset Here</Link>
                    </div>
                    <div className="forgot" style={{ marginTop: "20px" }}>
                        New to Myntra?&nbsp;
                        <Link to="/register" className="reset link">Create an account</Link>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default LoginPage