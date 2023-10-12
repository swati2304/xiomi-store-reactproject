import React, {useState} from "react";
import "./Card.css"

function Card({img, price, name}){
  return(
    <div className="cards-container">
      <img src={img} className="tablet-images"/>
      <p className="description">{name}</p>
      <p className="description-1"> Just Rs. {price}/-</p>
      <button className="btn-1">Buy Now</button>
    </div>
  )
}
export default Card;