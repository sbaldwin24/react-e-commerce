import React from "react";
import { NavLink } from "react-router-dom";
/**
 * TODO
 * Create Products && ShoppingCart Component
 */
function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/shopping-cart">
          Shopping Cart
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
