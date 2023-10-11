import React, {useState} from "react";
import "./Card.css"

function Card({img, price, title}){
  return(
    <div className="cards-container">
      <h2 className="title">{title}</h2>
      <img src={img} className="laptop-images"/>
      <p>{price}</p>
    </div>
  )
}
export default Card;