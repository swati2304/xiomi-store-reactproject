import React from 'react'
import "./Home.css"
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import HomeImg1 from "./img/Mi-Diwali-Offers.jpg"
import HomeImg2 from "./img/diwali mi 2.jpg"
import HomeImg3 from "./img/redmi-note-3.jpg"
import HomeImg4 from "./img/xiaomi-diwali4.jpg"
import HomeImg5 from "./img/diwali_sale5.webp"
import TabImg  from "./img/tab1.jpeg"
import TabImg2 from "./img/tab2.jpg"
import TabImg3 from "./img/tab3.jpg"
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
       <Navbar/>
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
                    <div class="carousel-item">
                    <img src={HomeImg5} class="d-block w-100"/>
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

                <div className='Brand-Head'>
                  <h1>Tablets</h1>
                </div>

                  <Link to="/laptop" className="btn41-43 btn-42">
                        View More
                  </Link>
                  <br/>

                  <div className="container text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={TabImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi Pad 6</h5>
                                <p class="card-text">Snapdragon 870 | Quad Speakers up to ₹3,250* off with bank offers</p>
                                <p className="card-text">From ₹22,999</p>
                            </div>

                            <div class="card-body">
                               
                                <Link to="/laptop" class="card-link"><button>More</button></Link>
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={TabImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi Pad 5</h5>
                                <p class="card-text">2.5k Resolution | 120Hz Refresh Rate...</p>
                                <p class="card-text">From ₹23,999 </p>

                            </div>

                            <div className="card-body">
                               
                                <a href="#" className="card-link"><button>More</button></a>
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div class="card" index="width: 18rem;">
                            <img src={TabImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Redmi Pad</h5>
                                <p className="card-text">MediaTek HelioG99 | 2k Resolution..</p>
                                <p className="card-text">From ₹14,499</p>
                            </div>

                            <div className="card-body">
                               
                                <Link to="/laptop" className="card-link"><button>More</button></Link>
                            </div>
                        </div>

                     </div>

                </div>
           </div> 


           <Footer/>


                  
    </>              

  )
}

export default Home