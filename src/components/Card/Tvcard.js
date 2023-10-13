import React, {useState} from "react";
import "./Tvcard.css"

function Card1({name, price, img,del}){
  return(
    <div className="card-container">
    
      <h3 className="name-text">{name}</h3>
      <p className="price-text">₹{price}<del className="delprice"> ₹ {del}</del></p>
      <button className="btn-1">Buy Now</button>
      <button className="btn-1 btn-2">Learn More</button>
      <img src={img} className="tv-images"/>
      <p className="symbolicbtn">RR</p>
    </div>
  )
}
export default Card1;