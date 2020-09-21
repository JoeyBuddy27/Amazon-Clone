import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{ basket, user, basketPrice }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon Ad"
          className="checkout__ad"
        />
        <p>{user ? user.email : null}</p>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <div className="checkout__items">
          <FlipMove enterAnimation="fade" leaveAnimation="fade">
            {basket.map((item) => (
              <div>
                <CheckoutProduct
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </FlipMove>
        </div>
        <div className="checkout__totalItems">
          <p>
            Subtotal ({basket.length} items):{" "}
            <b>£{getBasketTotal(basket).toFixed(2)}</b>
          </p>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
