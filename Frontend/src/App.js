import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css";
import ProductListing from './Components/AllProductListing';
const App = () => {
  return (
    <>
      <Navbar />
      <ProductListing />
    </>
  )
}

export default App