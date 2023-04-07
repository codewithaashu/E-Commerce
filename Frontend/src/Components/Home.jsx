import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="menu-cont">
          <div className="menu-box1">
            <Link to={"/categories/mens"}>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/bafbd8d5-f327-4bf3-aea4-9c53880cb7c21677917419652-SS23-TopNav-Men.png"
                alt="Menu pic"
              />
            </Link>
          </div>
          <div className="menu-box1">
            <Link to={"/categories/womens"}>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/b0eb0d86-4623-45c7-b0cb-4fdd49ee5dc81677917419663-SS23-TopNav-Women.png"
                alt="Menu pic"
              />
            </Link>
          </div>
          <div className="menu-box1">
            <Link to={"/categories/kids"}>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/cf5acd39-4447-4f7c-acdb-60ed7faea66d1677917419638-SS23-TopNav-Kids.png"
                alt="Menu pic"
              />
            </Link>
          </div>
          <div className="menu-box1">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/8ea951bd-68e3-43d8-a332-01b085c11c171677917419576-SS23-TopNav-Footwear.jpg"
              alt="Menu pic"
            />
          </div>
          <div className="menu-box1">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/3849d868-2bed-46cf-b7f7-2b20e3f63abf1677917419617-SS23-TopNav-Jewellery.jpg"
              alt="Menu pic"
            />
          </div>
        </div>

        <div className="banner-cont-box mt-3">
          <div className="banner-mob">
            <Link to={"/categories/mens"}>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/4/4/96778c4c-215d-4810-b97b-da065459a9971680600749281-sale-is-live-Main-split-banner_01.gif"
                alt=""
              />
            </Link>
            <Link to={"/categories/womens"}>
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/4/4/29caca5d-768b-4965-b547-f90fa6c0c1261680600749269-sale-is-live-Main-split-banner_02.gif"
                alt=""
              />
            </Link>
          </div>
          <div className="banner-desktop">
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/b7c96008-36cf-40ab-921d-33992f66b7d81680501693501-Main-Banner_Desktop_02.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a9c2393a-99ac-457c-b92b-c0b993d62e3a1680501693685-Main-Banner_Desktop_03.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/bcdb5967-cb39-408e-bc52-1b5a42cbec401680501693721-Main-Banner_Desktop_04.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/b7078b60-cc3a-4be1-b91b-22634a3daa401680501693418-Main-Banner_Desktop_05.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/1f9d78ba-9368-4cfc-a69c-e2e92faebda91680501693572-Main-Banner_Desktop_06.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/c6161279-8397-437c-9fe6-e8b8ecd59aab1680501693608-Main-Banner_Desktop_07.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/3f0d9848-3c1d-46fb-8f49-cab5d8ee53021680501693646-Main-Banner_Desktop_08.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a6df5257-c259-4e2f-a9ca-1b59c61e6fb01680501693322-Main-Banner_Desktop_09.jpg"
              alt=""
            />
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/0b37b32e-80ca-4e49-b47e-27db30505d0a1680501693461-Main-Banner_Desktop_10.jpg"
              alt=""
            />
            <Link to={"/categories/mens"}>
              <img
                src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/32a436fa-48b0-4ca7-941e-5b09d20e185a1680501693381-Main-Banner_Desktop_11.jpg"
                alt=""
              />
            </Link>
            <Link to={"/categories/womens"}>
              <img
                src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/1d427824-c1f8-43f1-a055-00ec75023e841680501693283-Main-Banner_Desktop_12.jpg"
                alt=""
              />
            </Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/035d7a4d-06f5-40aa-87a5-6ea939394ddd1680501693535-Main-Banner_Desktop_13.jpg"
              alt=""
            />
          </div>
          <div className="banner-info">
            <img
              src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/6/5cc42525-0b9c-4b2b-8308-048dfbd679cb1680759261208-dk-gerniric_model--1-.jpg"
              alt="Banner Pic"
            />
          </div>
          <div className="shop-by-category-heading">
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a9740648-846f-46d8-bb8e-c72dbe9cad131680503282470-Shop-By-Category.jpg" alt="" />
          </div>
          <div className="shop-by-category-cart">
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/9166bbae-b90c-443d-b45e-4420b2b0a8b51680504171267-Shop-By-Category_HP_02.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/d40ad591-ef03-4399-93da-c45670bb29531680504171211-Shop-By-Category_HP_28.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/46c17b2b-3f9d-48b3-a59b-a1e827af8a911680504170862-Shop-By-Category_HP_05.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a42b3ebb-450e-43bb-add6-858d6590037a1680504170746-Shop-By-Category_HP_23.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/dc417052-bc61-42a7-a191-517d66b43a561680504171516-Shop-By-Category_HP_18.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/bcc206df-2fa7-4c8b-8e13-cb1d281ef59d1680504171553-Shop-By-Category_HP_19.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/682e91a1-260f-45f4-af75-7052dab95d701680504171175-Shop-By-Category_HP_14.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/39835f2b-5e3b-4a44-93ef-f18eef9bab2d1680504171986-Shop-By-Category_HP_15.jpg" alt="" />
            <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/87c381ad-8f90-4fa1-85d8-dfb92a2ba4bf1680504171014-Shop-By-Category_HP_22.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/fbe99f9e-06aa-4a1f-b23c-225deb65f1101680504171793-Shop-By-Category_HP_16.jpg" alt="" />
            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/a8ed5113-8990-4229-ac32-8e8595264e6d1680504171641-Shop-By-Category_HP_11.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
