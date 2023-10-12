import React from 'react'
import "./Laptop.css"
import Card from '../../components/Card/Card';
import ImgTablet from './../../views/Laptop/img/tab2.jpg'
import Img from './../../views/Laptop/img/tab-2.jpeg'
import Images from './../../views/Laptop/img/tab-3.jpeg'
import Tablet from './../../views/Laptop/img/tab-4.jpeg'
import Tab from './../../views/Laptop/img/tab3.jpg'
import ImgTab from './../../views/Laptop/img/tab-7.jpeg'
import ImgTabs from './../../views/Laptop/img/tab1.jpeg'
import ImgTabs1 from './../../views/Laptop/img/tab-1.jpeg'
import ImageOfLaptop from './../../views/Laptop/img/laptop-2.jpeg'
import LapImage from './../../views/Laptop/img/lap.webp'
import HomeImg1 from './../../views/Laptop/img/m-5.jpeg'
import HomeImg2 from './../../views/Laptop/img/main-img-2.jpeg'
import HomeImg3 from './../../views/Laptop/img/m-6.jpeg'
import HomeImg4 from './../../views/Laptop/img/main-img-4.jpeg'
import LapImage2 from './../../views/Laptop/img/laptop-4.jpeg'
import LapImage3 from './../../views/Laptop/img/laptop-5.jpeg'
import LapImage4 from './../../views/Laptop/img/lap-1.jpeg'
import LapImage5 from './../../views/Laptop/img/lap-6.jpeg'
import LapImage6 from './../../views/Laptop/img/lap-7.jpeg'
import LapImage7 from './../../views/Laptop/img/lap-8.jpeg'



function Laptop({img}) {
  return (
    <>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img src={HomeImg1} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src={HomeImg2}class="d-block w-100"/>
    </div>
    <div class="carousel-item">
    <img src={HomeImg3} class="d-block w-100"/>
    </div>
    <div class="carousel-item">
    <img src={HomeImg4} class="d-block w-100"/>
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>

</div>

    <div>
      <br/>
      <h1 className='main-title'>Tablets </h1>
      <br/>
      <div className='container'>
      <Card img={ImgTablet} price={20999} name="xiomi Mi Pad 5"/>
      <Card img={Img} price={15999} name="xiomi Mi pad 6"/>
      <Card img={Images} price={22999} name="xiomi Mi pad 5 Review"/>
      <Card img={Tablet} price={18599} name="xiomi Mi pad 6 pro 11"/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='container'>
      <Card img={Tab} price={19999} name="xiomi pad 6 pro" />
      <Card img={ImgTab} price={24999} name="The Best xiomi Tablet"/>
      <Card img={ImgTabs} price={24999} name="The Best xiomi Tablet"/>
      <Card img={ImgTabs1} price={27999} name="The xiomi Tablet"/>
      </div>
      <br/>
      <br/>
      <br/>
      <h1 className='main-title'>Laptops </h1>
      <br/>
      <div className='container'>
      <Card img={ImageOfLaptop} price={75000} name="xiomi NoteBook pro 11"/>
      <Card img={LapImage} price={45999} name="xiomi Mi Notebook Ultra"/>
      <Card img={LapImage2} price={55999} name="xiomi Mi Laptop Book"/>
      <Card img={LapImage3} price={30999} name="xiomi Mi Notebook"/>
      </div>
      <br/>
      <br/>
      <div className='container'>
      <Card img={LapImage4} price={35999} name="xiomi Laptop Pro 11"/>
      <Card img={LapImage5} price={32999} name="xiomi Mi Notebook Pro Ultra"/>
      <Card img={LapImage6} price={55999} name="xiomi Mi Laptop Air"/>
      <Card img={LapImage7} price={30999} name="xiomi Mi Gaming Laptop"/>
      </div>
    </div>
    </>  
  )
}

export default Laptop;