import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">Agarwal Sweet Corner</div>
        <div className="nav-items">
          <ul className="nav-items-list">
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/products">
                Product
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/wishlist">
                WishList
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
