import {url} from './index'
import {ADD_TO_FAVORITE} from "../action-types";

export const addToFavorite = (payload) => ({type: ADD_TO_FAVORITE, payload})

export const fetchFavoriteItem = (id) => async (dispatch) => {
  try {
    const response = await fetch(url + `/${id}`)
    const data = await response.json()
    dispatch(addToFavorite(data))
  } catch (e) {
    console.log(e)
  }
}