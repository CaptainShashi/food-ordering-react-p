import React, { useContext } from "react";
import './Cart.css'; // Corrected the import path
import { StoreContext } from "../../Components/Context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{index + 1}</p> 
          <p>{food_list[item.id]?.title}</p>
          <p>${food_list[item.id]?.price}</p>
          <p>{item.quantity}</p>
          <p>${food_list[item.id]?.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
