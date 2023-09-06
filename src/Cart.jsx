import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addcart, removecart, decreaseCart, clearAll } from './Cartslice'

const Cart = () => {
  const {cartItems, cartQuantity, cartTotalAmount} =useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  if(cartQuantity===0){
    return <h4 className='empty-cart'>Cart is empty</h4>
  }else{
    return (
      <div className='cart-container'>
        {cartItems.map((item, key)=>{
        return(
            <div className='cart-test-div'>
            <div key={key} className='latest-product-div cart-product-div'>
            {item.img}
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            <button onClick={()=>dispatch(addcart(item))} className='cart-button'>+</button>
            {item.Qty * item.cartQuantity}
            <button onClick={()=>dispatch(decreaseCart(item))} className='cart-button'>-</button><br />
            <button onClick={()=>dispatch(removecart(item))} className='cart-button'>Remove</button>
            <h4>Total:${item.price* item.cartQuantity}</h4>
          </div>
            </div>
        )
      })}
       
      <div className='cart-summary'>
      <h4>Summary</h4><hr />
       <h5>Total Quantity: {cartQuantity}</h5>
       <h5>Total Price: ${cartTotalAmount}</h5>
       <br />
       <button onClick={()=>dispatch(clearAll())} className='cart-button'>Clear All</button>
      </div>
  
      </div>
    )
  }
 
}

export default Cart
