import {createSlice} from '@reduxjs/toolkit'

const Cartslice=createSlice({
  name:'cart',
  initialState:{
    cartItems:[],
    cartQuantity:0,
    cartTotalAmount:0
  },
  reducers:{
    addcart:(state, action)=>{
      const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
      if(itemIndex>=0){
        state.cartItems[itemIndex].cartQuantity+=1
      }else{
        const temProduct={...action.payload, cartQuantity:1}
        state.cartItems.push(temProduct)
      }
    },
    removecart:(state, action)=>{
      const nextCartItems=state.cartItems.filter((item)=>item.id !==action.payload.id)
      state.cartItems=nextCartItems
    },

    decreaseCart:(state,action)=>{
      const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
      if(state.cartItems[itemIndex].cartQuantity>1){
        state.cartItems[itemIndex].cartQuantity-=1
      }else if(state.cartItems[itemIndex].cartQuantity===1){
        const nextCartItems=state.cartItems.filter((item)=>item.id !==action.payload.id)
      state.cartItems=nextCartItems 
      }
    },

    clearAll:(state)=>{
      state.cartItems=[]
    },

    getTotal:(state)=>{
      let {total, quantity}=state.cartItems.reduce((cartTotal, item)=>{
       const {price, cartQuantity}=item
       const itemTotal=price * cartQuantity
       cartTotal.total+=itemTotal
       cartTotal.quantity+=cartQuantity
       return cartTotal 
      }, {total:0, quantity:0})
      state.cartQuantity=quantity
      state.cartTotalAmount=total
    }
  }
})

export const {addcart, removecart, decreaseCart, getTotal, clearAll}=Cartslice.actions
export default Cartslice.reducer