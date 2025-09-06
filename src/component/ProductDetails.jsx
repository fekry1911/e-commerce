import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [item, setItem] = React.useState({});
  const { id } = useParams();

  const getProductDetails = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (id) {
      getProductDetails(id);
    }
  }, [id]);

  return (
    <div className="m-4 justify-content-center align-items-center">
      <h2>Product Details</h2>
      <div className="row">
        <div className="col-md-4 h-50">
          <img
            src={item?.images?.[0]}
            alt={item?.title}
            className="img-fluid object-fit-cover h-50"
          />
        </div>
        <div className="col-md-8 h-50">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="mb-2 text-warning">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
            <span className="text-dark ms-2">(4.0)</span>
          </div>
          <hr className="m-4" />
          <p>Price: ${item.price}</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            architecto nemo quod officiis fugiat placeat ad natus atque
            expedita, odio, velit temporibus quas facilis cupiditate laudantium,
            eaque rerum asperiores consequatur.
          </p>
          <hr
            style={{
              borderTop: "2px dashed #ccc",
              margin: "20px",
            }}
          />
          <div
            style={{
              padding: "10px",
              color: "white",
              borderRadius: "15px",
              marginBottom: "10px",
              width: "10%",
              textAlign: "center",
              backgroundColor: item.stock > 30 ? "green" : "red",
            }}
          >
            {item.stock > 30 ? "In Stock" : "Out of Stock"}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex
            expedita optio suscipit ab? Recusandae magnam praesentiu
          </p>
          <div className="d-flex justify-content-start gap-3">
            <button
              style={{
                width: "30%",
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              Buy Now
            </button>

            <button
              style={{
                width: "30%",

                backgroundColor: "transparent",
                color: "green",
                border: "1px solid green",

                padding: "10px 20px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="d-flex justify-content-start gap-4 justify-content-between">
            <img
              src={item?.images?.[0]}
              alt="Related Product"
              className="col-2 border border-secondary rounded-4"
            />
            <img
              src={item?.images?.[0]}
              alt="Related Product"
              className="col-2 border border-secondary rounded-4"
            />
            <img
              src={item?.images?.[0]}
              alt="Related Product"
              className="col-2 border border-secondary rounded-4"
            />
            <img
              src={item?.images?.[0]}
              alt="Related Product"
              className="col-2 border border-secondary rounded-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
