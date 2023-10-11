import React from 'react'
import Card from '../../components/Card/Card';
import ImgTablet from './../../views/Laptop/img/laptop-1.jpg'


function Laptop({img}) {
  return (
    <div>
      <h1>Tablets </h1>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      <Card img={ImgTablet} price={5000} title="Tablet"/>
      <Card img={ImgTablet} price={5000} title="Tablet"/>

    </div>
  )
}

export default Laptop;