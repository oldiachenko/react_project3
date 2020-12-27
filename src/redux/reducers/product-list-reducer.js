import {SET_PRODUCT_LIST} from "../action-types";

const initialState = {
  productList: []
}

export const productListReducer =(state=initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST: {
      return {...state, productList: action.payload}
    }
    default: {
      return state
    }
  }

}