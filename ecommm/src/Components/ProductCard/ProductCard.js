import React from "react";
import "./ProductCard.css";

export default function ProductCard({
  item,
  buttonText,
  buttonHandler,
  wishlishtIconColor,
  wishlistHandler,
  displayIcon
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="product" />
        <div
          className="wishlist-icon"
          style={{ color: wishlishtIconColor, display: displayIcon }}
          onClick={wishlistHandler}
        >
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div>
        <p>Yaha pe description hoga</p>
        <p>yaha pe price hoga</p>
      </div>
      <button className="add-cart-button" onClick={buttonHandler}>
        Add to Cart
      </button>
    </div>
  );
}
