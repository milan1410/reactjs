// App.js
import React from 'react';
import './App.css';
import ProductListing from './components/ProductListing';
import ProductFilter from './components/ProductFilter';
import AddToCart from './components/AddToCart';
import Checkout from './components/Checkout';

function App() {
  const categories = ['Electronics', 'Clothing', 'Books']; // Example categories

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <ProductFilter categories={categories} />
        </div>
        <div className="col-md-9">
          <ProductListing />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <AddToCart />
        </div>
        <div className="col-md-6">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default App;
