// ProductFilter.js
import React from 'react';

const ProductFilter = ({ categories, onChange }) => {
  return (
    <div>
      <h2>Product Filter</h2>
      <select className="form-control mb-3" onChange={onChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
