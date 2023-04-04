import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
        <div className="footer-box">
            <div id="mainbox">
                <div class="box1">
                    <h5 class="h5_g" >ONLINE SHOPPING</h5>
                    <Link to={"/categories/men's clothing"}>Men</Link>
                    <br />
                    <Link to={"/categories/women's clothing"}>Women</Link>
                    <br />
                    <Link to={"/categories/electronics"}>Electronics</Link>
                    <br />
                    <Link to={"/categories/jewelery"}>Jewelery</Link>
                    <br />
                </div>
                <div class="box2">
                    <h5 class="h5_g" >USEFUL LINKS</h5>
                    <a href="https://www.linkedin.com/in/ashishranjan1626/" target='_blank'>Contact Us</a>
                    <a href="https://chatwithaashu.netlify.app/" target='_blank'>FAQ</a>
                    <a href="https://www.myntra.com/tac" target='_blank'>T&C</a>
                    <a href="https://codewithaashu.netlify.app/" target='_blank'>Blog</a>
                    <a href="https://www.myntra.com/privacypolicy" target='_blank'>Privacy Policy</a>
                </div>
                <div class="box3">
                    <h5 className='pb-3'>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <a href="https://play.google.com/store/apps/details?id=com.myntra.android&hl=en_IN&gl=US&pli=1" target='_blank'><img class="logo1" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" /></a><a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059" target='_blank'> <img class="logo1" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" /></a>
                </div>

                <div class="box4">
                    <div class="l1r1">
                        <div class="l1">
                            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />

                        </div>
                        <div class="r1" >
                            <p><span>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
                        </div>
                    </div>
                    <div class="l1r1">
                        <div class="l1">
                            <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" />

                        </div>
                        <div class="r1" >
                            <p><span>Return within 30days</span>  of receiving your order</p>
                        </div>
                    </div>


                </div>
            </div>

            </div>
        </>
    )
}
export default Footer;
