import {combineReducers} from "redux";
import {productListReducer} from "./product-list-reducer";
import {favoriteItemsReducer} from "./favorite-items-reducer";
import {cartReducer} from "./cart-reducer";

export const reducer = combineReducers({
  productList: productListReducer,
  favoriteItems: favoriteItemsReducer,
  cart: cartReducer
})

