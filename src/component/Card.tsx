import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BasicExample({
  title,
  id,
  description,
  image,
  Stock,
  price,
  discountPercentage,
  AddToCart,
  cart,
}: {
  title: string;
  description: string;
  image: string;
  Stock: number;
  price: string;
  discountPercentage: string;
  id: number;
  AddToCart: (id: number) => void;
  cart: { id: number; title: string; price: string }[];
}) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/product/${id}`)}
      style={{ width: "18rem", border: "1px solid #eee" }}
    >
      <div className="position-relative">
        <Card.Img variant="top" src={image} />

        <div
          style={{
            backgroundColor: Stock > 20 ? "green" : "red",
          }}
          className="position-absolute top-0 start-0 translate-middle badge rounded-pill  text-light p-2 m-5"
        >
          {Stock > 20 ? "In Stock" : "Out of Stock"}
        </div>
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <Card.Title style={{ fontSize: "1rem" }}>{title}</Card.Title>
          <span className="float-end d-flex gap-2">
            <p>{price}</p>
            <p className="text-danger">{discountPercentage}</p>
          </span>
        </div>
        <Card.Text>{description}</Card.Text>
        <div className="mb-2 text-warning">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <span className="text-dark ms-2">(4.0)</span>
        </div>
        <Button
          onClick={() => AddToCart(id)}
          style={{
            backgroundColor: cart.find((item) => item.id === id)
              ? "green"
              : "transparent",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "30px",
          }}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
