import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
      price: props.price,
    });
  };

  return (
    <div className="checkoutProduct" id={props.id}>
      <img
        className="checkout__items__image"
        src={props.image}
        alt={props.title}
      />

      <div className="checkout__items__desc">
        <h4 className="checkout__items__title">{props.title} </h4>
        <p>Books</p>
        <p>In Stock</p>
        {!props.hideButton && (
          <button onClick={removeFromBasket} className="checkout__removeButton">
            Remove from basket
          </button>
        )}
      </div>
      <h4 className="checkout__items__price">£{props.price} </h4>
    </div>
  );
}

export default CheckoutProduct;
