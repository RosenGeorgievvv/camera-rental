import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from "../../data.js";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <div className="banner">

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
