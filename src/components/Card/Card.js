import React, {useState} from "react";
import "./Card.css"
import {Link} from "react-router-dom"


export default function Card({img, price, name, id}){
  return(
    <div className="cards-container">
      <img src={img} className="tablet-images"/>
      <p className="description">{name}</p>
      <p className="description-1"> Just Rs. {price}/-</p>
      <Link to={`/laptop/showdetails/${id}`}><button className="btn-2">Buy Now</button>
      </Link>

    </div>
  )
}




export  function Lifestylecard({img,title,price,description,btn}) {
  return (
    <div className="lifestylecardcontainer">

      <img src={img}/>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{description}</p>
       <button>{btn}</button>
      
    </div>
  )
}
