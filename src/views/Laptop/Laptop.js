import React from 'react'
import "./Laptop.css"
import Card from '../../components/Card/Card';
import ImgTablet from './../../views/Laptop/img/tab-5.jpeg'
import Img from './../../views/Laptop/img/tab-2.jpeg'
import Images from './../../views/Laptop/img/tab-3.jpeg'
import Tablet from './../../views/Laptop/img/tab-4.jpeg'
import Tab from './../../views/Laptop/img/tab-6.jpeg'
import ImgTab from './../../views/Laptop/img/tab-7.jpeg'
import ImgTabs from './../../views/Laptop/img/tab-1.jpeg'


function Laptop({img}) {
  return (
    <div>
      <h1 className='main-title'>Tablets </h1>
      <div className='container'>
      <Card img={ImgTablet} price={9999} name="xiomi Mi pad post Gallery"/>
      <Card img={Img} price={15999} name="xiomi Mi pad 6"/>
      <Card img={Images} price={22999} name="xiomi Mi pad 5 Review"/>
      <Card img={Tablet} price={8599} name="xiomi Mi pad 6 pro 11"/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='container'>
      <Card img={Tab} price={19999} name="xiomi pad 6 pro" />
      <Card img={ImgTab} price={24999} name="The Best xiomi Tablet"/>
      <Card img={ImgTabs} price={24999} name="The Best xiomi Tablet"/>
      </div>
    </div>
  )
}

export default Laptop;