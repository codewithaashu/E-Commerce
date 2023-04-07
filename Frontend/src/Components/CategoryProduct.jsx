import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchCategoryProducts, removeSelectedProduct } from '../Redux/Action';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Footer from './Footer';
import Spinner from './Spinner';
import { BASE_URL } from '../Secret';
const CategoryProduct = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (category && category !== "") {
            fetchCategoryData();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [category])

    const fetchCategoryData = async () => {

        const apiData = await axios.get(`${BASE_URL}/product/?category=${category}`).catch((err) => console.log("Error is " + err)); //our api
        dispatch(fetchCategoryProducts(apiData.data.products));//our api
        // const apiData = await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch((err) => console.log("Error is "+err));
        // dispatch(fetchCategoryProducts(apiData.data));
    }
    const categoryItems = useSelector((state) => state.fetchCategoryProductFunc.product);
    return (
        <>
            <Navbar />
            {
                categoryItems.length === 0 ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 cols-lg-6 mt-5 card-box1">
                            <ProductCard data={categoryItems} />
                        </div>
                        <Footer />

                    </>

                )
            }

        </>
    )
}

export default CategoryProduct;