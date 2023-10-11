import React from 'react'
import "./Laptop.css"
import Card from '../../components/Card/Card';
import ImgTablet from './../../views/Laptop/img/tab-1.jpeg'


function Laptop({img}) {
  return (
    <div>
      <h1 className='main-title'>Tablets </h1>
      <div className='container'>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='container'>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      </div>
    </div>
  )
}

export default Laptop;