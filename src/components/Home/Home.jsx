import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import banner3 from '../../assets/banner/banner3.jpg';

import data from "../../data.js";
import Card from "./Card";

const Home = () => {
  // Array of image URLs for the banner slideshow
  const bannerImages = [
    banner1,
    banner2,
    banner3,
  ];

  // Settings for the Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
