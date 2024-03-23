// AddToCart.js
import React, { useState } from 'react';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Product Name</h5>
          <p className="card-text">Product Description</p>
          <button className="btn btn-primary" onClick={() => addToCart({ id: 1, name: 'Example Product', description: 'Example Description', price: 10 })}>Add to Cart</button>
        </div>
      </div>
      <h3>Cart Items</h3>
      <ul className="list-group">
        {cartItems.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
