import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ onRemove, ...props }) => {
  // TODO: Check if the product list is empty and display a message if needed

  return (
    <div>
      <ul>
        {props.products.map((p) => <ProductCard product={p} key={p.id} onRemove={onRemove} />)}
      </ul>
    </div>
  );
};

export default ProductList;
