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

export function Products({title, price, img, description}){

  const [quantity, setQuantity] = useState(0);

  function increment(){
      setQuantity(quantity+1);
  }

  function decrement(){
      setQuantity(quantity-1);
  }

  return(
      <div className="card">
          <h1>{title}</h1>
          <h3>Rs.{price}/-</h3>
          <br/>
          <button onClick={increment} className="btn-1">+</button>
          {quantity}
          <button onClick={decrement} className="btn-1">-</button>
          <br/>
          <br/>
          <br/>
          <button className="btn">Buy Now</button>

      </div>
  )
}
