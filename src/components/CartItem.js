// src/components/CartItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(
      updateQuantity({ id: item.id, quantity: parseInt(e.target.value, 10) })
    );
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <div>
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
        <p>Total: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
