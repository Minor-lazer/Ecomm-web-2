import React from "react";
import "./Home.css";
import OfferCard from "../../Components/OfferCard/OfferCard.js";
import Banner from "../../Components/Banner/Banner.js";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="offer__section">
        <OfferCard
          img={"https://bakerbynature.com/wp-content/uploads/2015/05/IMG_1817-2.jpg"}
          text={"Hello"}
        />
        <OfferCard
          img={
            "https://images.herzindagi.info/image/2019/Oct/how-to-cook-bengali-sweet-dish-parwal-ki-mithai-main.jpg"
          }
          text={"Hello"}
        />
        <OfferCard
          img={"https://www.easycookingwithmolly.com/wp-content/uploads/2020/05/samosa-recipe.jpg"}
          text={"Hello"}
        />
          <OfferCard
          img={"https://d1ehow9yl5smng.cloudfront.net/image/catalog/Karwachauth/Mithai%20and%20Cookies-550x550.jpg"}
          text={"Hello"}
        />
      </div>
    </div>
  );
}
