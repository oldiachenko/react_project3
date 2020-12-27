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
      <div className='favorite'>
        <Favorite/>
        Items: {favoriteItems.length}
        <br/>
        Sum: {totalPriceFavorite}
      </div>
      <div className='cart'>
        <ShoppingCart/>
        Items: {cart.length}
        <br/>
        Sum: {totalPriceCart}
      </div>
    </div>
  );
}

export default Header;