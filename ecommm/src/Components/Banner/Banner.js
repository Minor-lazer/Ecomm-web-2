import React from "react";
import "./Banner.css";
import { useState, useEffect } from "react";

const Banner = () => {
  const [frontClass, setFrontClass] = useState(
    "card__side card__side--front front-1"
  );
  const [backClass, setBackClass] = useState(
    "card__side card__side--back back-1"
  );

  let flipCheck = 1;

  const rotateCard = () => {
    if (flipCheck === 0) {
      setFrontClass("card__side card__side--front showGreen");
      setBackClass("card__side card__side--back showRed");
      flipCheck = 0;
    } else {
      setFrontClass("card__side card__side--front");
      setBackClass("card__side card__side--back");
      flipCheck = 0;
    }
    setTimeout(rotateCard, 3500);
  };

  useEffect(() => {
    rotateCard();
  }, []);

  return (
    <div className="banner-card">
      <div className={frontClass} id="front-1">
        <div className="text-box-top">Sweetness</div>
        <h3 className="text-box-middle">Add some sweetness </h3>
        <h3 className="text-box-lower">Mithais all around </h3>
      </div>
      <div className={backClass} id="back-1">
        <div className = "banner-text">
        <h3 className="text-box-top">Savouries</h3>
        <h3 className="text-box-middle">Add some savouries </h3>
        <h3 className="text-box-lower">Namkeens all around </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
