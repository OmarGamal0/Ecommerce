import React, { useContext } from 'react'
import { HeroCarousel, HeroFeatures, HeroImage } from '../../container'
import { moodContext } from '../../context/MoodContext';

import './heroSection.css'
function HeroSection() {
  let { darkMode } = useContext(moodContext);

  return (
    <div className={darkMode ? " dark-mode ecommerce_heroSection bg-body-black" : 'bg-body-tertiary '}>
      <div className='container pt-4' >
        <div className="row justify-content-evenly">

          <div className="col-md-9   ">
            <div>
              <HeroCarousel />
            </div>
          </div>

          <div className="col-md-3  ">
            <div className="row   ">
              <HeroImage />
            </div>
          </div>
        </div>

        <div className='row justify-content-evenly'>
          <div className='col-md-12 '>
            <HeroFeatures />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection