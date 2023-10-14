import React from 'react'
import "./Lifestyle.css"
import { Lifestylecard } from '../../components/Card/Card'
import Lifedata from "./Lifestyle.json"
function Lifestyle() {
    return (
        <div>
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i03.appmifile.com/268_operator_in/23/06/2023/b50b27200bccb5c27b2b8311c67bb212.jpg?f=webp" class="d-block h-75 w-100" alt="..." />
                            <div class="carousel-caption  ">
                                <h5 className='label-burds'>Redmi Burds 4 Active</h5>
                                <p className='price-burds'>₹ 2500 <del className='del-price'> ₹ 3000</del></p>
                                <button type='button' className='btn-buynow-burds'>Buy Now</button>
                                <p className='slogen-burds'>Say Hello To The Sensetional , Multiple Attachment For All Your Grooming Need .</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i03.appmifile.com/373_operator_in/04/09/2023/31d560bb8412cd412bc570eee9922baa.jpg?f=webp" class="d-block h-75 w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5 className='label-burds'>Xiomi Uniblade Trimmer</h5>
                                <p className='price-burds'>₹ 1399 <del className='del-price'> ₹ 2199</del></p>
                                <button type='button' className='btn-buynow-burds'>Buy Now</button>
                                <p className='slogen-burds'>Your Wait For New Looks Is Almost Over</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i03.appmifile.com/693_operator_in/25/09/2023/ae6ed6fdecd72f1335572edd7e9a7f7b.jpg?f=webp" class="d-block h-75 w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5 className='label-burd'>Redmi Burds 4 Active</h5>
                                <p className='price-burd'>₹ 2500 <del className='del-price'> ₹ 3000</del></p>
                                <button type='button' className='btn-buynow-burd'>Buy Now</button>
                                <p className='slogen-burd'>Say Hello To The Sensetional , Multiple Attachment For All Your Grooming Need .</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <img className='diwali-offer-img' src='https://i03.appmifile.com/836_operator_in/08/10/2023/d54fe4f37c3c351d6bd3034e6f191c6a.jpg?f=webp'/>
            <p className='hedingofpowerbank'>Powerbanks & Chargers</p>

            <div className='card-container-lifestyle'>
            {
                Lifedata.map((card , index )=>{
                    const { img,title,price,description,btn } = card;
                    return(
                        <Lifestylecard img={img} title={title} price={price} description={description} btn={btn}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Lifestyle