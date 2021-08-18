import React from "react";
import "./ProductPage.css";
import { useFilter } from "../../Context/FilterContext.js";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext.js";
import ProductData from "../../Data/ProductData.js";
import ProductCard from "../../Components/ProductCard/ProductCard.js";
import FilterDisplay from "../../Components/FilterDisplay/FilterDisplay.js";

export default function ProductPage() {
  const { state, dispatch } = useCart();
  const { filteredData } = useFilter();
  const wishlist = useWishlist();

  const iconColour = (item) => {
    let flag = wishlist.state.find((product) => product.id === item.id);
    if (flag) {
      return "red";
    } else {
      return "white";
    }
  };

  return (
    <div className="product__layout">
      {/* <div>Ye hai hamari product page</div> */}
      <div className="filter__box">
        <FilterDisplay />
      </div>
      <div className="product__layout">
        {filteredData.map((item) => {
          return (
            <div className="product__card__layout">
              <ProductCard
                item={item}
                buttonText={"Add to Cart"}
                buttonHandler={() => dispatch({ type: "ADD", payload: item })}
                wishlistHandler={() => {
                  if (iconColour(item) === "white") {
                    wishlist.dispatch({ type: "ADD", payload: item });
                  } else {
                    wishlist.dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
