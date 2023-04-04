import React, { useEffect } from 'react'
import { setUser } from '../Redux/Action'
import AddToBagEmpty from './AddToBagEmpty'
import AddToBagNavbar from './AddToBagNavbar'
import AddToBagPage from './AddToBagPage'
import { useSelector} from 'react-redux'

const AddToBag = () => {
    const user = useSelector((state)=>state.setUserFunc.user);
    
  return (
    <>
    <AddToBagNavbar/>
    {
        user.addToCartProduct===undefined?<AddToBagEmpty/>:user.addToCartProduct.length===0?<AddToBagEmpty/>:<AddToBagPage/>
    }
    </>
  )
}

export default AddToBag