import React from 'react'
import { ProductsArray } from './Products';
import { addcart } from './Cartslice';
import {useDispatch} from 'react-redux'
import Whyus from './Whyus';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Newsletter from './Newsletter';
import { AppContext } from './Navbar';
import { useContext } from 'react';

  const Home = () => {
    const{search}=useContext(AppContext)
   
  const dispatch=useDispatch()
  const handleCart=(item)=>{
    dispatch(addcart(item))
  }
  
  return (
    <div>
      <div className='giftos-image'>
        <h1>Welcome to Giftos</h1>
        <img src="./images/slider-img.png" alt="" srcset="" className='slider-image'/>
      </div>

    {/* LATEST PRODUCTS DIV */}

    <br />
    <hr />
    <br />
      
    <h2 className='latest-product'>OUR LATEST PRODUCTS 2023</h2>
    
     <div className='test-div'>
    {ProductsArray.filter((item)=>{
      if(search===''){
        return item.title
      }else if(item.title.toLowerCase().includes(search.toLowerCase())){
        return item.title
      }
    }).map((item, key)=>{
      return(
        <div key={key} className='latest-product-div'>
          {item.img}
          <h4>{item.title}</h4>
          <h4>${item.price}</h4>
          <button onClick={()=>handleCart(item)} className='cart-button'>Add To Cart</button>
        </div>
      )
    })}
      </div>

    <div className='view-all-products-button'>
    <button className='view-product-button'><h4>VIEW ALL PRODUCTS</h4></button>
    </div>


     {/* SAVINGS BOX */}
   
    <div className='savings-box-container'>
      <h1>BEST SAVINGS ON NEW ARRIVALS</h1><br />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quas vel, suscipit, quam itaque adipisci veritatis ducimus dolore quaerat corrupti earum impedit assumenda dolorem reiciendis. Voluptatum nemo alias praesentium? Fuga.</p>
      
      
      <div className='savings-buy-button'>
      <button className='savings-button1'>BUY NOW</button>
      <button className='savings-button2'>SEE MORE</button>
      </div>

      <img src="./images/saving-img.png" alt="" srcset="" className='savings-image'/>
    </div>

    <Whyus/>
    <Testimonial/>
    <Contact/>
    <Newsletter/>
    </div>
  )
}

export default Home
