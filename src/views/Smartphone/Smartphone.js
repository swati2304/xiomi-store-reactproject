import React from 'react'
import "./Smartphone.css"
import Phone from "./../../components/Card/Phone"
import Img1 from "./img/poster1.jpg"
import Img2 from "./img/poster2.jpg"
import Img3 from "./img/poster11.jpg"
import ImgTablet from "./img/redmi1.jpg"
import Img from "./img/image1.webp"
import Phones from "./img/image4.webp"
import Images from "./img/image3.webp"
import Image2 from "./img/image2.webp"
import Image5 from "./img/image8.jpg"
import Image6 from "./img/image6.jpg"
import Image7 from "./img/image7.jpg"




function Smartphone() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p className='main-title'>MI Phones</p>
      <div className='container'>
      <Phone img={ImgTablet} price={14000} name="Redmi Note 12 5G"/>
      <Phone img={Img} price={20999} name="Redmi 12 5G "/>
      <Phone img={Phones} price={19500} name="Redmi Note 12 Pro"/>
      <Phone img={Images} price={16999} name="Xiaomi 12 Pro 5G"/>
      </div>
      <br/>
      <div className='container'>
      <Phone img={Image2} price={14000} name="Redmi 12C"/>
      <Phone img={Image5} price={20999} name="Mi 10i "/>
      <Phone img={Image6} price={19500} name="Mi 11 X"/>
      <Phone img={Image7} price={16999} name="Mi 10"/>
      </div>
      <br/>
      <h4 className=' main-title-2'>Redmi series</h4>

      <div className='second-card-container'>
        <div className='first-card'>
          <h4 className='title-txt-1'>Redmi 12</h4>
          <p className='txt-1'>Octa Core Processor | 200mp + OIS</p>
          <p className='txt-1'>From ₹14,499</p>
          <img className='img-1'></img>
        </div>
        <div className='second-card'>
          <h4 className='title-txt-1'>Redmi A2 +</h4>
          <p className='txt-1'>Octa Core Processor | Up to 7GB Ram..</p>
          <p className='txt-1'>From ₹15,499</p>
          <img src={Image7} className='img-2'/>
        </div>
      </div>

    </div>
  )
}

export default Smartphone