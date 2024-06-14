import React from 'react'

const Card = ({img, name, des}) => {


  return (
    <div className="card">
      <img src={img} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{des}</p>
      </div>
    </div>
  )
}

export default Card