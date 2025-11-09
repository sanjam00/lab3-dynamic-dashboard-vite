import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


// const FilterButton = styled(Button)({
//   margin: 5,
// })

const App = () => {
  // TODO: Define initial product data
  // TODO: Implement state to manage filtering
  // TODO: Implement logic to filter products based on availability

  // const [filter, setFilter] = useState('');

  // const filteredProducts = filter
  //   ? products.filter((p) => p.inStock === filter)
  //   : products;

  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ])

  function handleRemove(id) {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <>
      <h1>Product Dashboard</h1>
      {/* <FilterButton variant="contained" onClick={() => setFilter('In Stock')}>In Stock</FilterButton>
      <FilterButton variant="contained" onClick={() => setFilter('')}>All Products</FilterButton> */}

      {/* TODO: Add buttons to allow filtering by availability */}
      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={products} onRemove={handleRemove} />
    </>
  );
};

export default App;
