import React from 'react'
import { main1, main2 } from '../../image/image'
import './heroCarousel.css'

function HeroCarousel() {

  return (<>
    <div id="carouselExampleFade" className="carousel slide carousel-fade py-1 ">
      <div className="carousel-inner ">
        <div className="carousel-item active position-relative">
          <HeroCarouselContent gender={'MEN'} />
          <img src={main1} className="d-block w-100" alt="..." />
        </div>

        <div className="carousel-item">
          <HeroCarouselContent gender={'WOMEN'} />
          <img src={main2} className=" d-block w-100 " alt="..." />
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <GrFormPrevious aria-hidden="true" className='carousel-control-prev-icon' size={25} color={'#222'} />

      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <MdNavigateNext aria-hidden="true" className='carousel-control-next-icon' size={25} color={'#222'} />

      </button>
    </div>

  </>)
}



function HeroCarouselContent({ gender }) {
  return (
    <div className='ecommerce_heroCarousel__content '>
      <h3 className='text-uppercase'>Lifestyle collection</h3>
      <h2 className=' fw-bolder '>{gender}</h2>
      <h4 className='fw-bold'>SALE UP TO  <span className='text-danger'>30% OFF</span></h4>
      <p>Get Free Shipping on<br />  orders over $99.00</p>
      <button className='btn btn-dark mt-1 rounded-0 px-4 py-2'>shop Now</button>
    </div>
  )
}

import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

export default HeroCarousel
