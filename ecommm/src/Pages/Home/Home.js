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
          img={"https://static.toiimg.com/photo/67058495.cms"}
          text={"Hello"}
        />
        <OfferCard
          img={
            "https://www.orderyourchoice.com/117991-large_default/-rasgulla-shree-mithai-.jpg"
          }
          text={"Hello"}
        />
        <OfferCard
          img={"https://static.toiimg.com/photo/67058495.cms"}
          text={"Hello"}
        />
      </div>
    </div>
  );
}
