import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar';
import Spinner from './Spinner';
import ProductCard from './ProductCard';
import Footer from './Footer';
const SearchProduct = () => {
    const searchItem = useSelector((state)=>state.fetchSearchProductFunc.product);
  return (
        <>
            <Navbar />
            {
                searchItem.length === 0 ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 row-cols-lg-6 mt-5 card-box1">
                            <ProductCard data={searchItem} />
                        </div>
                        <Footer />

                    </>

                )
            }

        </>
  )
}

export default SearchProduct