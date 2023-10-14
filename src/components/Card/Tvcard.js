import React, {useState} from "react";
import "./Tvcard.css"

function Card1({name, price, img,del,off}){
  return(
    <div className="card-container">
      <img src={img} className="tv-images"/>
      <h3 className="name-text">{name}</h3>
      <p className="price-text">₹{price}<del className="delprice"> ₹ {del}</del></p>
     <div className="btn-container">
      <button className="btnn-1" >Buy Now</button>
      <button className="btnn1 btnn-2">Learn More</button>
      </div>
      <p className="symbolicbtn">{off}</p>
    </div>
  )
}
export default Card1;