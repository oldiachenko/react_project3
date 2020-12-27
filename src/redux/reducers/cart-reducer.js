import {ADD_TO_CART} from "../action-types";


const initialState = {
  cart: []
}

export const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART : {
      return {...state, cart: [action.payload]}
    }
    default: {
      return state
    }
  }
}