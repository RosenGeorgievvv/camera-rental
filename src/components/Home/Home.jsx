import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from "../../data.js";
import Card from "./Card";

const Home = () => {
  // Array of image URLs for the banner slideshow
  const bannerImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

  // Settings for the Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            des={item.des}
            type={item.type}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
