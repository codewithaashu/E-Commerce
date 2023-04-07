import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
//import component and css for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../Redux/Action';
import { BASE_URL } from '../Secret';
const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("Male");
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //toast function will fire
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
    const successfullyRegister=async(phone)=>{
        localStorage.setItem("isLogged",true);
        localStorage.setItem("phone",phone);

        //frontend send request to get user data by phone field  and then backend perform operation and send data of user
        const user = await axios.get(`${BASE_URL}/product/user/?phone=${phone}`).catch((err)=>{console.log("error is : "+err);})
        dispatch(setUser(user.data.user));
        navigate("/");
    }
    const registerData = async(e) => {
        e.preventDefault();
        if(!email || !password || !phone || !fullName || !gender){
            //toast will be fire at a condition
            return errorToast("Please,Fill all the details");
        }
        //when we click on submit btn then we send the data(work as postman)
        //for sending data, api with post method will call
        await axios.post(`${BASE_URL}/product/register`, {
            email, password, phone, fullName, gender
        }).then((res) => res.data==="Already Registered"?errorToast("You are already registered. Login in your account"):successfullyRegister(phone)).catch((err) => console.log("Error is : " + err))
        setEmail("");
        setPassword("");
        setPhone("");
        setFullName("");
        setSelect1(false);
        setSelect2(false);
    }
    return (
        <>
            <div className="login-cont" style={{overflowX:"hidden"}}>
                <div className="login-box m-3">
                    <div className="login-head">
                        Create your Account
                    </div>
                    <form className='form-box' autoComplete="off" onSubmit={registerData}>
                        <div className="form-group">
                            <input type="text" name="email" autoComplete='false' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" autoComplete='false' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" autoComplete='false' placeholder='Mobile Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="fullName" autoComplete='false' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input className={`genderBtn ${select1 ? "highlightBtn" : ""}`} type="button" value="Male" name="gender" onClick={(e) => { setSelect2(false); setSelect1(!select1); setGender("Male"); }} />
                            <input className={`genderBtn ${select2 ? "highlightBtn" : ""}`} type="button" value="Female" name='gender' onClick={(e) => { setSelect1(false); setSelect2(!select2); setGender("Female"); }} />
                        </div>
                        <div className="form-group">
                            <button type='submit' className="loginBtn">CREATE ACCOUNT</button>
                        </div>
                    </form>
                    <div className="forgot" style={{ marginTop: "20px" }}>
                        Already Registered? &nbsp;
                        <Link to="/login" className="reset link">Login your Account</Link>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default RegisterPage