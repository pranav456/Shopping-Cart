import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>₹{prod.price.toString().split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>          
          <div className="button-container">
            {cart.some((p) => p.id === prod.id) ? (
              <Button onClick={() => {
                dispatch({
                  type: "REMOVE_TO_CART",
                  payload: prod
                })
              }} variant="danger">Remove from Cart</Button>
            ) : (
              <Button onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod
                })
              }} disable={prod.outOfStock}>
                {prod.outOfStock ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
