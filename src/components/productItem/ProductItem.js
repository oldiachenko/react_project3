import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoriteItem, fetchProductList} from "../../redux/action-creators";
import './productItem.css'
import {fetchCartItem} from "../../redux/action-creators/cart-action-creators";
import Favorite from "../svg/Favorite";
import ShoppingCart from "../svg/ShoppingCart";


function ProductItem() {
  const dispatch = useDispatch()
  const {productList} = useSelector(({productList: {productList}}) => ({productList}))

  //
  // const state = useSelector((state) => {
  //   console.log(state);
  //   return state
  // })

  useEffect(() => {
    dispatch(fetchProductList())
  }, [dispatch])


  return (
    <div className='productItems'>
      {
        productList.map((productItem) => (
            <div className='productItem'>
              <h3> Product:</h3>
              <img src={productItem.image} alt='product'/>
              {productItem.title}
              <br/>
              <h3> Price: {productItem.price}</h3>
              <button onClick={()=>dispatch(fetchFavoriteItem(productItem.id))} >
                <Favorite/>
              </button>
              <button onClick={()=>dispatch(fetchCartItem(productItem.id))}>
                <ShoppingCart/>
              </button>
            </div>
          )
        )}
    </div>
  );
}

export default ProductItem;