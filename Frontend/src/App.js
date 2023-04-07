import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css";
import Home from './Components/Home';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <Footer/> 
    </>
  )
}

export default App