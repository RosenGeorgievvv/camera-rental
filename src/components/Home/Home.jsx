import data from '../../data.js';
import Card from './Card';

const Home = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          name={item.name}
          des={item.des}
        />
      ))}
    </div>
  );
};

export default Home;