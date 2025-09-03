import React, { useState, useEffect } from "react";
import BasicExample from "./Card";

export default function Home() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const AddToCart = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      if (!cart.find((cartItem) => cartItem.id === id)) {
        setCart((prevCart) => {
          const updatedCart = [...prevCart, item];
          console.log("Updated cart:", updatedCart);
          return updatedCart;
        });
      } else {
        setCart((prevCart) =>
          prevCart.filter((cartItem) => cartItem.id !== id)
        );
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
    <div className="d-flex flex-wrap gap-2 p-3 h-100 m-2">
      {items.length === 0 && (
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-500"></div>
        </div>
      )}
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
