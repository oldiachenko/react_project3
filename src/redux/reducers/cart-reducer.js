import {ADD_TO_CART} from "../action-types";


const initialState = {
  cart: []
}

export const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART : {

      const updatedCart = state.cart.filter((el) => el.id !== action.payload.id)

      if (state.cart.length === updatedCart.length) {
        updatedCart.push(action.payload)
      }

      return {...state, cart: updatedCart}
    }
    default: {
      return state
    }
  }
}