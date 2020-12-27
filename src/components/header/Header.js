import React from 'react';
import './header.css'
import {useSelector} from "react-redux";
import {useMemo} from "react/cjs/react.production.min";

function Header() {

  const {favoriteItems, cart} = useSelector(({favoriteItems: {favoriteItems}, cart:{cart}}) => ({favoriteItems, cart}))

  // const totalPrice = useMemo(() => {
  //   let price = 0;
  //   return favoriteItems.map((item) => (
  //     price = price + item.price
  //   ))
  // }, [favoriteItems])

  let priceFavorite=0;
  const totalPriceFavorite = favoriteItems.map((item) => (priceFavorite=item.price+priceFavorite))

  let priceCart=0;
  const totalPriceCart = cart.map((item) => (priceCart=item.price+priceCart))

  return (
    <div className={'header'}>
      <div className={'favorite'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/>
        </svg>
        <br/>
        Items: {favoriteItems.length}
        <br/>
        Sum: {totalPriceFavorite}
      </div>
      <div className={'cart'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/>
        </svg>
        <br/>
        Items: {cart.length}
        <br/>
        Sum: {totalPriceCart}
      </div>
    </div>
  );
}

export default Header;