import React from 'react';
import '../styles/ProductCard.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProductCard = (props) => {

  return (
    <div className="productCard">
      <div
        id="productContainer"
        className={`${!props.product.inStock ? "outOfStockClass" : "productContainer"}`}>
        <h3 id="productTitle">{props.product.name}</h3>
        <p id="productPrice">{props.product.price}</p>
        <p id="productAvailability">{props.product.inStock ? "In Stock" : "Out of Stock"}</p>
        <img id="productImage" src="" />
        <button onClick={() => props.onRemove(props.product.id)}>Remove Item</button>
      </div>

      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      {/* TODO: Display product name */}
      {/* TODO: Display product price */}
      {/* TODO: Show if the product is in stock or out of stock */}

    </div>
  );
};

export default ProductCard;
