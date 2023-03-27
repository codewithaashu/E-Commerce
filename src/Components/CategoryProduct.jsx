import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchCategoryProducts, removeSelectedProduct } from '../Redux/Action';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if(category && category!=""){
            fetchCategoryData();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    },[category])

    const fetchCategoryData = async () => {
    
        const apiData = await axios.get(`http://localhost:5000/product/?category=${category}`).catch((err) => console.log("Error is "+err)); //our api
        dispatch(fetchCategoryProducts(apiData.data.products));//our api
        // const apiData = await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch((err) => console.log("Error is "+err));
        // dispatch(fetchCategoryProducts(apiData.data));
    }
    const categoryItems = useSelector((state) => state.fetchCategoryProductFunc.product);
    return (
        <>
            <Navbar />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 cols-lg-6 mt-5">
                <ProductCard data={categoryItems} />
            </div>
        </>
    )
}

export default CategoryProduct;