import React from 'react';
import './productList.css'

import ProductItem from "../productItem/ProductItem";

function ProductList() {


  return (

    <div className={'productList'}>
     <ProductItem/>
    </div>
  );
}

export default ProductList;