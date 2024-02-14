// src/components/CartPage.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "../styles/animations.css"; // Import your CSS file

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  const totalAmount = items.reduce(
    (total, item) => total + (item.price * item.quantity || 0),
    0
  );

  return (
    <div className="cart-page">
      <h2 className="fadeIn">Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <p className="fadeIn">
        Total Quantity: {isNaN(totalQuantity) ? 0 : totalQuantity}
      </p>
      <p className="fadeIn">
        Total Amount: ${isNaN(totalAmount) ? 0 : totalAmount}
      </p>
    </div>
  );
};

export default CartPage;
