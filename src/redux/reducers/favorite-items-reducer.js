import {ADD_TO_FAVORITE} from "../action-types";

const initialState = {
  favoriteItems: []
}

export const favoriteItemsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE : {
      return {...state, favoriteItems: [...state.favoriteItems, action.payload]}
    }
    default: {
      return state
    }
  }
}
