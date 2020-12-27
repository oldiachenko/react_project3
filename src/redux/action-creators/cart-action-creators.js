import {url} from './index'
import {ADD_TO_CART} from "../action-types";



export const addToCart = (payload) => ({type: ADD_TO_CART, payload})

export const fetchCartItem = (id) => async (dispatch) => {
  try {
    const response = await fetch(url + `/${id}`)
    const data = await response.json()
    dispatch(addToCart(data))
  } catch (e) {
    console.log(e)
  }
}