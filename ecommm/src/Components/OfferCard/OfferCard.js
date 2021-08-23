import React from "react";
import "./OfferCard.css";
import { Route, Link } from "react-router-dom";
import ProductPage from "../../Pages/Products/ProductPage.js";

export default function OfferCard({ img, text }) {
  return (
    <div className="offer__card">
       
      <div className="offer__card__inner">
        <div className="offer__card--front">
        <img className="offer__card__front--image" src={img} />
          <div className = "layer">
    
          </div>
        </div>
      </div>
  
    </div>
    
  );
}
