import Card from '../Card';
import '../Home/home.css';
import data from '../../data.js'


const Home = () => {


  return (
    <div className="home">
      {data.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  )
}

export default Home