import {SET_PRODUCT_LIST} from "../action-types";

export const setProductList = (payload) => ({type: SET_PRODUCT_LIST, payload})

export const url = 'https://fakestoreapi.com/products'

export const fetchProductList = () => async (dispatch) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    dispatch (setProductList(data))
  } catch (e) {
    console.error(e)
  }
}
