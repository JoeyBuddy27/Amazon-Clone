import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import RoomIcon from "@material-ui/icons/Room";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  let welcomeName = null;
  if (user) {
    welcomeName = user.email.split("@");
  }
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? welcomeName[0] : "User"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket && basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__belt">
        <div className="header__belt__delivery">
          <RoomIcon fontSize="large" />
          <div className="header__belt__delivery__address">
            <p>Deliver to {user ? welcomeName[0] : null}</p>

            <h4>{user ? "123 Fake St, London" : "Login to enter address"}</h4>
          </div>
        </div>
        <a href="#">Fresh</a>
        <a href="#">Prime Video</a>
        <a href="#">Gift Ideas</a>
        <a href="#">Best Sellers</a>

        <h3>2 million songs included with Prime</h3>
      </div>
    </div>
  );
}

export default Header;
