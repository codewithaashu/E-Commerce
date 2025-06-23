import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router'
import { fetchSelectedProduct, removeSelectedProduct } from '../Redux/Action';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import { BASE_URL } from '../Secret';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if(id && id!==""){
      fetchProductDetails();
    }
    return () => {
        dispatch(removeSelectedProduct());
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[id])
  const fetchProductDetails = async () => {
    const apiData = await axios.get(`${BASE_URL}/product/?index=${id}`).catch((err) => console.log(err));
    dispatch(fetchSelectedProduct(apiData.data.products[0]));//our api
    // const apiData = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => console.log(err));
    // dispatch(fetchSelectedProduct(apiData.data));
  }
  return (
    <>
      <Navbar />
      <ProductPage />
    </>
  )
}

export default ProductDetails
