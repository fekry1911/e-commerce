import React, { useState, useEffect } from "react";
import BasicExample from "./Card";

export default function Home() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const AddToCart = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      if (!cart.find((cartItem) => cartItem.id === id)) {
        setCart([...cart, item]);
      } else {
        setCart(cart.filter((cartItem) => cartItem.id !== id));
      }
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 p-3">
      {items.map((product) => (
        <BasicExample
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.thumbnail}
          Stock={product.stock}
          price={product.price}
          id={product.id}
          discountPercentage={product.discountPercentage}
          AddToCart={AddToCart}
          cart={cart}
        />
      ))}
    </div>
  );
}
