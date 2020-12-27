import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoriteItem, fetchProductList} from "../../redux/action-creators";
import './productItem.css'
import {fetchCartItem} from "../../redux/action-creators/cart-action-creators";


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
    <div className={'productItems'}>
      {
        productList.map((productItem) => (
            <div className={'productItem'}>
              <h3> Product:</h3>
              <img src={productItem.image} alt={'product image'}/>
              {productItem.title}

              <br/>
              <h3> Price: {productItem.price}</h3>
              <button onClick={()=>dispatch(fetchFavoriteItem(productItem.id))} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/>
                </svg>
              </button>
              <button onClick={()=>dispatch(fetchCartItem(productItem.id))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/>
                </svg>
              </button>
            </div>
          )
        )}
    </div>
  );
}

export default ProductItem;