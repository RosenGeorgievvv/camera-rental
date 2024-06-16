import '../Home/home.css';
import data from "../../data.js"


const Home = () => {


  return (
    <div className="home">
      <img src={data.img} alt="" />
      <h1>Hi</h1>
    </div>
  )
}

export default Home