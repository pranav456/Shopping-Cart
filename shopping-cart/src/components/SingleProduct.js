import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>{prod.price.toString().split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          <div className="button-container">
          <Button variant="danger">Remove from Cart</Button>
          <Button disable={prod.outOfStock}>{prod.outOfStock?"Out of Stock":"Add to Cart"}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
