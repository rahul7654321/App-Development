// TakeOrder.js

import React, { useState } from 'react';
import './takeorder.css';

function TakeOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Product Name 1',
      image: 'https://app.wendys.com/unified/assets/menu/pg-cropped/1804_small_US_en.png',
      price: 1890
    },
    {
      id: 2,
      name: 'Product Name 2',
      image: 'https://app.wendys.com/unified/assets/menu/pg-cropped/1804_small_US_en.png',
      price: 96
    },
    {
        id: 2,
        name: 'Product Name 2',
        image: 'https://app.wendys.com/unified/assets/menu/pg-cropped/1804_small_US_en.png',
        price: 10
      },
      {
        id: 2,
        name: 'Product Name 2',
        image: 'https://app.wendys.com/unified/assets/menu/pg-cropped/1804_small_US_en.png',
        price: 1000
      },
    // Add more products as needed...
  ];

  const openShopping = () => {
    setIsOpen(true);
  }

  const closeShopping = () => {
    setIsOpen(false);
  }

  const addToCard = (key) => {
    const newItem = { ...products[key], quantity: 1 };
    setCartItems([...cartItems, newItem]);
    setQuantity(quantity + 1);
  }

  const changeQuantity = (key, newQuantity) => {
    if (newQuantity === 0) {
      const updatedCartItems = cartItems.filter((item, index) => index !== key);
      setCartItems(updatedCartItems);
      setQuantity(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
    } else {
      const updatedCartItems = cartItems.map((item, index) => (
        index === key ? { ...item, quantity: newQuantity } : item
      ));
      setCartItems(updatedCartItems);
      setQuantity(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
    }
  }

  return (
    <div className='body'>
      <div className={`App ${isOpen ? 'active' : ''}`}>
        <div className="container-t">
          <header >
            <h1>Your Food Cart</h1>
            <div className="shopping" onClick={openShopping}>
              <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="Shopping Cart" />
              <span className="quantity">{quantity}</span>
            </div>
          </header>
          <div className="list">
            {products.map((product, key) => (
              <div key={key} className="item">
                <img src={product.image} alt={product.name} />
                <div className="title">{product.name}</div>
                <div className="price">{product.price.toLocaleString()}</div>
                <button onClick={() => addToCard(key)}>Add To Card</button>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h1>Card</h1>
          <ul className="listCard">
            {cartItems.map((item, key) => (
              <li key={key}>
                <div><img src={item.image} alt={item.name} /></div>
                <div>{item.name}</div>
                <div>{item.price.toLocaleString()}</div>
                <div>
                  <button onClick={() => changeQuantity(key, item.quantity - 1)}>-</button>
                  <div className="count">{item.quantity}</div>
                  <button onClick={() => changeQuantity(key, item.quantity + 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkOut">
            <div className="total">
              {cartItems.reduce((total, item) => total + item.price, 0).toLocaleString()}
            </div>
            <div className="closeShopping" onClick={closeShopping}>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeOrder;
