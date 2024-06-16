import './Card.css';

const Card = ({ img, name, des }) => {
  return (
    <div className="section-box">
      <img src={img} alt={name} className="section-box-image" />
      <h2 className="section-box-title">{name}</h2>
      <p className="section-box-content">{des}</p>
    </div>
  );
};

export default Card;