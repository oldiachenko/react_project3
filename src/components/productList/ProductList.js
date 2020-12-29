import React, {useEffect} from 'react';
import './productList.css'

import ProductItem from "../productItem/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../redux/action-creators";

function ProductList() {

  const dispatch = useDispatch();
  const {productList, favoriteItems, cart} = useSelector(({
                                                            productList: {productList},
                                                            favoriteItems: {favoriteItems},
                                                            cart: {cart}
                                                          }) => ({productList, favoriteItems, cart}))

  useEffect(() => {
    dispatch(fetchProductList())
  }, [dispatch])


  return (

    <div className='productList'>
      {
        productList.map((productItem) => (
            <ProductItem
              isAddedToFavorite={!!favoriteItems.find(({id}) => id === productItem.id)}
              isAddedToCart={!!cart.find(({id}) => id === productItem.id)}
              key={productItem.id}
              productItem={productItem}
            />
          )
        )
      }

    </div>
  );
}

export default ProductList;