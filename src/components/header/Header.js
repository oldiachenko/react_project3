import React from 'react';
import './header.css'
import {useSelector} from "react-redux";
import {useMemo} from "react";
import Favorite from "../svg/Favorite";
import ShoppingCart from "../svg/ShoppingCart";

function Header() {

  const {favoriteItems, cart} = useSelector(({favoriteItems: {favoriteItems}, cart:{cart}}) => ({favoriteItems, cart}))

  const totalPriceFavorite = useMemo(() => {
    return favoriteItems.reduce((acc,el)=> acc + el.price, 0).toFixed(2)
  }, [favoriteItems])

  const totalPriceCart = useMemo(() => {
    return cart.reduce((acc,el)=> acc + el.price, 0).toFixed(2)
  }, [cart])


  return (
    <div className='header'>
      <div className='favorite' title={`Total price:${totalPriceFavorite}`}>
        <Favorite/>
        Items: {favoriteItems.length}
      </div>
      <div className='cart' title={`Total price:${totalPriceCart}`}>
        <ShoppingCart/>
        Items: {cart.length}
      </div>
    </div>
  );
}

export default Header;