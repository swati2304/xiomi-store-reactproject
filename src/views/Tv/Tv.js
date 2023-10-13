import React from 'react';
import Img1 from "./img/img1.jpg";
import Card from "./../../components/Card/Tvcard";
import Tv1 from "./img/tv1.jpg";
import Tv2 from "./img/tv2.jpg";
import Tv3 from "./img/tv3.jpg";
import Tv4 from "./img/tv4.jpg";
import Tv5 from "./img/tv5.jpg";
import Tv6 from "./img/tv6.jpg";
import Tv7 from "./img/tv7.jpg";
import Tv8 from "./img/tv8.jpg";
import Tv9 from "./img/tv9.jpg";
import Tv10 from "./img/tv10.jpg";
import Tv11 from "./img/tv11.jpg";
import Tv12 from "./img/tv12.jpg";

function Tv(){
  return (
    <>
   <h1>Xiaomi Smart TV</h1> 
    <div className="img-container">
  <img src={Img1} alt="..." className="front-img"/>
   </div>
   <div className='tv-container'>
      <Card img={Tv1} price={10499} name="xiomi Smart TV A 32 (80cm)"/>
      <Card img={Tv2} price={61999} name="Xiaomi Smart TV X 65 (163.9 cm) 2023 Edition"/>
      <Card img={Tv3} price={35999} name="Xiomi Smart TV X 55 (138.8CM) 2023 Edition"/>
      <Card img={Tv4} price={30999} name="Xiomi Smart TV X 50 (125.7CM) 2023Edition"/>
      </div>
      <div className='tv-container'>
      <Card img={Tv5} price={24999} name="Xiaomi Smart TV X 43 (108 cm) 2023 Edition"/>
      <Card img={Tv6} price={20499} name="Xiomi Smart TV A 40 (100cm)"/>
      <Card img={Tv7} price={21999} name="Xiomi Smart TV A 43 (108cm)"/>
      <Card img={Tv8} price={44999} name="Xiomi Smart TV X Pro 1.38m (55)"/>
      </div>
      <div className='tv-container'>
      <Card img={Tv9} price={39999} name="Xiomi Smart TV X Pro 1.25m (50)"/>
      <Card img={Tv10} price={29999} name="Xiomi Smart TV X Pro 1.08m (43)"/>
      <Card img={Tv11} price={34999} name="Xiomi Smart TV X55 (139cm)"/>
      <Card img={Tv12} price={29499} name="Xiomi Smart TV X50 (126cm"/>
      </div>
  </>
  );
}

export default Tv;