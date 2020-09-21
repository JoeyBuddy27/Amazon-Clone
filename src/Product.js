import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatches action to store
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        id: props.id,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          <span role="img">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <span key={Math.random()}>⭐</span>
              ))}
          </span>
        </div>
      </div>
      <img src={props.image} alt={props.title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
