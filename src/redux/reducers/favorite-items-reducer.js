import {ADD_TO_FAVORITE} from "../action-types";

const initialState = {
  favoriteItems: []
}

export const favoriteItemsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE : {

      const updatedFavoriteItems = state.favoriteItems.filter((el) => el.id !== action.payload.id)
       if (updatedFavoriteItems.length === state.favoriteItems.length) {
         updatedFavoriteItems.push(action.payload)
       }
      return {...state, favoriteItems: updatedFavoriteItems}
    }
    default: {
      return state
    }
  }
}
