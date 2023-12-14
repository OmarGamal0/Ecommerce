import React from 'react'
import { content1, content2 } from '../../image/image'

import './heroImage.css'
function HeroImage() {
  return (<>
    <div className="col-12 p-1  mb-md-4   ">
      <div className='position-relative  '>
        <img className='w-100' src={content2} alt="" />
        <HeroImageContent />
      </div>
    </div>


    <div className="col-12 p-1  mt-md-4">
      <div className=' position-relative   '>
        <img className='w-100 h-100   ' src={content1} alt="" />
        <HeroImageContent />
      </div>

    </div>

  </>
  )
}

function HeroImageContent() {
  return (
    <div className='ecommerce_heroImage__content'>
      <h5 className='fw-light fs-6'>NEW ARRIVALS</h5>
      <h4 className=' fs-5 '>SUMMER</h4>
      <h6 className=' fs-5'>SALE  <span className='text-danger'>20%  OFF</span></h6>
      <button className='btn btn-outline-dark border-0 fw-bold rounded-0 ps-1'>shop Now</button>
    </div>
  )
}

export default HeroImage