import React from "react";
import "./Wishlist.css";
import { useWishlist } from "../../../Context/WishlistContext.js";
import ProductCard from "../../../Components/ProductCard/ProductCard.js";

export default function WishlistPage() {
  const wishlist = useWishlist();
  return (
    <div>
      <div className="wishlistLayout">
        {wishlist.state.length === 0
          ? "Wishlist khali hai bro"
          : wishlist.state.map((item) => {
              return (
                <div key={item.id} className="wishlist__card--display">
                  <ProductCard
                    item={item}
                    buttonText={"Remove"}
                    buttonHandler={() => {
                      wishlist.dispatch({ type: "REMOVE", payload: item });
                    }}
                    displayIcon={"none"}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}
