import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../Redux/Action';
import axios from 'axios';
import Spinner from './Spinner';
const ProductListing = () => {
  const dispatch = useDispatch();

  //when this component will render it(data fetch) will automatically call. so,we use useEffect
  useEffect(() => {
    return () => {
      //api will called
      fetchData();
    }
  }, [])
  const fetchData = async () => {
    const apiData = await axios.get("http://localhost:5000/product").catch((err) => {
      console.log("Error is " + err);
    }) //our api
    // const apiData = await axios.get("https://fakestoreapi.com/products").catch((err) => {
    //   console.log("Error is " + err);
    // })
    //data will stored in redux store
    dispatch(fetchAllProducts(apiData.data.products));//our api
    // dispatch(fetchAllProducts(apiData.data));
  }
  const storeData = useSelector((state) => state.fetchAllProductFunc.product);
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 cols-lg-6 mt-5">
        {
          storeData.length===0 ? <Spinner/> : <ProductCard data={storeData} />

        }
      </div>

    </>
  )
}

export default ProductListing