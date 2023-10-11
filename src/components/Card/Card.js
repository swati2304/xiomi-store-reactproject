import React, {useState} from "react";
import "./Card.css"

function Card({img, price, title}){
  return(
    <div>
      <h2>{title}</h2>
      <img src={img} className="laptop-images"/>
      <p>{price}</p>
    </div>
  )
}
export default Card;