import React from 'react'
import './App.css'
import { getTotal } from './Cartslice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'



const App = () => {
  const {cartItems}=useSelector((state)=>state.cart)

  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch(getTotal())
  },[cartItems, dispatch])

  return (
    <div>
      <Navbar/>
   
    </div>
  )
}

export default App
