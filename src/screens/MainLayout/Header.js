import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isUserLoggedIn as dispatchUserLogout } from "../../store/action";

import Cart from "../../components/Cart";
import "./header.scss";
import { useAlert } from "react-alert";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [openCart, setOpenCart] = useState(false);
  const { item, isUserLoggedIn } = useSelector((state) => state);

  const handleRedirect = useCallback(
    (route) => () => history.push(route),
    [history]
  );

  const handleLogout = () => {
    dispatch(dispatchUserLogout(''));
    alert.success("User logged out successfully");
    handleRedirect("/")
  }
  const toggleCart = useCallback(() => setOpenCart(!openCart), [openCart]);
  return (
    <header>
      <div className="navigation" role="navigation">
        <div onClick={handleRedirect("/")}>
          <img className="logo-img" src="static/images/logo.png" alt="logo" />
        </div>
        <div className="cart-login-container">
          <nav>
            {isUserLoggedIn === '' ? (
              <ul className="list-h">
                <li className="link">
                  <button onClick={handleRedirect("/login")}>SignIn</button>
                </li>
                <li className="link">
                  <button onClick={handleRedirect("/register")}>
                    Register
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="list-h">
                {`Welcome ${isUserLoggedIn}!`}
                <li className="link">
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </nav>
          <button className="btn-cart" onClick={toggleCart}>
            <img
              src="static/images/cart.svg"
              alt="cart icon"
              className="icon"
              id="outside"
            />
            <span className="text" id="cart-items">
              {item} Items
            </span>
          </button>
          <div
            id="desktop-cart"
            className="cart-main-cont"
            style={{ display: openCart ? "block" : "none" }}
          >
            <Cart closeCart={toggleCart} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
