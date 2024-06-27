import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import data from "../../data.js";
import Card from "./cardTemplate/Card.jsx";
import "./home.css";

const Home = () => {
  
   
  return (
    <div className="cards-container">
      {data.map((card, index) => (
        <Card key={index} img={card.img} name={card.name} des={card.des} />
      ))}
    </div>
  );
};

export default Home;
