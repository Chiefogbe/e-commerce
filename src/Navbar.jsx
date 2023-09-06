import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import Whyus from './Whyus'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Login from './Login'
import Cart from './Cart'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TfiClose} from 'react-icons/tfi'
import Newsletter from './Newsletter'
import { useSelector } from 'react-redux'
import {BiCart} from 'react-icons/bi'
import {createContext} from 'react'

export const AppContext=createContext()

const Navbar = () => {
  const [search, setSearch]=useState('')
  const {cartQuantity}= useSelector((state)=>state.cart)
  const[open, setOpen]=useState(false)
  const toggle=()=>{
    setOpen(!open)
  }
  return (
    <div>

      <AppContext.Provider value={{search, setSearch}}>
      <Router>
        <nav>
         <div><h1>GIFTOS</h1></div>
         
         <div className='Hamburger-div'>
        {open?<TfiClose onClick={toggle}/>:<GiHamburgerMenu onClick={toggle}/>}
        </div>

         <div className='navbar-links-invisible'>
         <Link to='/' className='Link-to'>Home</Link>
          <Link to='/Whyus' className='Link-to'>Why Us</Link>
          <Link to='/Contact' className='Link-to'>Contact Us</Link>
          <Link to='/Cart' className='Link-to'><BiCart/> <sup>{cartQuantity}</sup></Link>
          <input type="search" name="" id="" onChange={(e)=>{setSearch(e.target.value)}} />
         </div>
        </nav>

        {open?<div className='navbar-links-visible'>
         <Link to='/' className='Link-to'>Home</Link>
          <Link to='/Whyus' className='Link-to'>Why Us</Link>
          <Link to='/Testimonial' className='Link-to'>Testimonial</Link>
          <Link to='/Contact' className='Link-to'>Contact Us</Link>
          <Link to='/Newsletter' className='Link-to'>Newsletter</Link>
          <Link to='/Cart'><BiCart/> <sup>{cartQuantity}</sup></Link>
          <input type="search" name="" id="" onChange={(e)=>{setSearch(e.target.value)}} />
         </div>:''}

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Whyus' element={<Whyus/>}/>
          <Route path='/Testimonial' element={<Testimonial/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Newsletter' element={<Newsletter/>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  )
}

export default Navbar
