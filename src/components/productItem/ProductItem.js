import React from 'react';
import {useDispatch} from "react-redux";
import {fetchFavoriteItem} from "../../redux/action-creators";
import './productItem.css'
import {fetchCartItem} from "../../redux/action-creators/cart-action-creators";
import Favorite from "../svg/Favorite";
import ShoppingCart from "../svg/ShoppingCart";


function ProductItem({isAddedToFavorite, isAddedToCart, productItem: {id, image, title, price}}) {
  const dispatch = useDispatch()


  return (

    <div className='productItem'>
      <h3> Product:</h3>
      <img src={image} alt='product'/>
      {title}
      <br/>
      <h3> Price: {price}</h3>
      <button
        className={isAddedToFavorite ? 'added' : 'notAdded'}
        onClick={() => dispatch(fetchFavoriteItem(id))}>
        <Favorite/>
      </button>
      <button
        className={isAddedToCart ? 'added' : 'notAdded'}
        onClick={() => dispatch(fetchCartItem(id))}>
        <ShoppingCart/>
      </button>
    </div>


  );
}

export default ProductItem;