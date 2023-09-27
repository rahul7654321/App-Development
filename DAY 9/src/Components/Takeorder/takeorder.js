// TakeOrder.js

import React, { useState,useEffect } from 'react';
import './takeorder.css';
import { useSelector } from "react-redux";
import {  selectUser } from "../../Features/userSlice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


function TakeOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [name, setName] = useState('');
  
  useEffect(()=>{
	  if(user){
		  setName(user.name);
	  }else{
  
		  if(!name){
			  setName("Guest");
		  }
	  }
	  
  },[user,name]);

  const products = [
    {
      id: 1,
      name: 'Jr.Bacon Regular',
      image: 'https://app.wendys.com/unified/assets/menu/pg-cropped/1804_small_US_en.png',
      price: 180
    },
    {
      id: 2,
      name: 'Baconator',
      image: 'https://shorturl.at/bdg07',
      price: 150
    },
    {
      id: 3,
      name: 'Dave"s Double',
      image: 'https://shorturl.at/dfCPR',
      price: 189
    },
    {
        id: 4,
        name: 'Dave"s Triple'  ,      
        image: 'https://shorturl.at/tGHY1',
        price: 259
      },
      
      {
        id: 5,
        name: 'Cheese Croissant',
        image: 'https://shorturl.at/bgvEZ',
        price: 133
      },
      {
        id: 6,
        name: '20 Pc Chicken Nugget',
        image: 'https://shorturl.at/quYZ4',
        price: 199
      },
      {
        id: 7,
        name: 'Grilled Chicken Sandwich Combo',
        image: 'https://shorturl.at/bdfyS',
        price: 788
      },
      {
        id: 8,
        name: 'Spicy Chicken Sandwich Combo',
        image: 'https://shorturl.at/hqzFZ',
        price: 499
      },
      {
        id: 9,
        name: 'Caesar Chicken Salad',
        image: 'https://shorturl.at/oDI07',
        price: 159
      },
      {
        id: 10,
        name: 'Large Fries',
        image: 'https://shorturl.at/jORW8',
        price: 99
      },{
        id: 11,
        name: 'Jalapeno Baconator Fries',
        image: 'https://shorturl.at/ijkDQ',
        price: 199
      }, 
      
    
  ];

  const openShopping = () => {
    setIsOpen(true);
  }

  const closeShopping = () => {
    setIsOpen(false);
  }

  const addToCard = (key) => {
    const newItem = { ...products[key], quantity: 1 };
    
    const existingItemIndex = cartItems.findIndex(item => item.id === products[key].id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => (
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      ));
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }
    setQuantity(quantity + 1);
  }
  const removeFromCart = (key) => {
    const updatedCartItems = cartItems.filter((item, index) => index !== key);
    setCartItems(updatedCartItems);
    setQuantity(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
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
      <Link  to={"/"}>
       <h1>Welcome {name} !!</h1> 
      </Link>
      <div className={`App ${isOpen ? 'active' : ''}`}>
       
        <div className="container-t">
          <header >
            <h1>Ordering Food Cart</h1>
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
                <div className="price"> ₹ {product.price.toLocaleString()}</div>
                <button onClick={() => addToCard(key)}>Add To Cart</button>
              </div>
            ))}
          </div>
        </div>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <div className="card">
          <h1>Card</h1>
          <ul className="listCard">
            
            
            {cartItems.map((item, key) => (
              <li key={key}>
                
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='bx bxs-message-alt-x' onClick={() => removeFromCart(key)}></i><img src={item.image} alt={item.name} /></div>
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
            <div className="total-l">
            {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()}
            </div>
            <div className="closeShopping" onClick={closeShopping}>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeOrder;
