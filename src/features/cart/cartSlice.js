import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        cartItems : []
    },
    reducers : {
        addToCart : (state,action)=> {
            return {
                ...state,
                cartItems : [action.payload,...state.cartItems]
            }
        },
        removeFromCart : (state,action)=> {
            return {
                ...state,
                cartItems : state.cartItems.filter((item)=> item.id !== action.payload )
            }
        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer 