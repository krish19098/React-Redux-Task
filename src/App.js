// src/components/App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./services/productServices";
import { addItem } from "./features/cart/cartSlice";
import CartPage from "./components/CartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const products = await fetchProducts();
      products.forEach((product) => dispatch(addItem(product)));
    };
    fetchAndSetProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <CartPage />
    </div>
  );
}

export default App;
