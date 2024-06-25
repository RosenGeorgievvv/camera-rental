import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner4 from "../../assets/banner/banner4.jpg";

import data from "../../data.js";
import Card from "./cardTemplate/Card.jsx";
import "./home.css";

const Home = () => {
  const bannerImages = [
    banner1,
    banner2,
    banner4,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };

  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      
      {/* <div>
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            des={item.des}
            type={item.type}
          />
        ))}
      </div> */}
    </>
  );
};

export default Home;
