import React, { useState, useEffect } from "react";
import BasicExample from "./Card";
import { useCart } from "../context/CartContext";
import style from "../styles/loading.module.css";

export default function Home() {
  const [items, setItems] = useState<any[]>([]);
  const [Loading, SetLoading] = useState<boolean>(true);

  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.products);
        SetLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const toggleCart = (product: any) => {
    if (cart.find((item) => item.id === product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      {Loading ? (
        <div className={style.loaderWrapper}>
          <div className={style.loader}></div>
        </div>
      ) : (
        <div className="row gap-4 justify-content-center mt-4">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            >
              <BasicExample
                title={product.title}
                description={product.description}
                image={product.thumbnail}
                Stock={product.stock}
                price={product.price}
                id={product.id}
                discountPercentage={product.discountPercentage}
                AddToCart={() => toggleCart(product)}
                cart={cart}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
