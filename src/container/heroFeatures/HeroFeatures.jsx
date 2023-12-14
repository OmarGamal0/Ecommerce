import React, { useContext } from 'react'
import { moodContext } from '../../context/MoodContext';

import './heroFeatures.css'
function HeroFeatures() {
  let { darkMode } = useContext(moodContext);
  return (<>

    <div className={darkMode ? " dark-mode  container my-4 ecommerce_heroFeatures" : 'container my-4 bg-white'} >
      <div className='row  justify-content-evenly p-1 py-4 '>

        <div className=" col-md-3">
          <div className="border rounded-2">
            <div className='d-flex'>
              <TbTruckDelivery size={50} className='p-1 me-md-3 ' />
              <h4 className='fs-6 my-auto'>Fast Delivery
                <br />
                <span className='fs-6 fw-light'>Start from $10</span>  </h4>
            </div>
          </div>
        </div>

        <div className=" col-md-3  ">
          <div className="border rounded-2">
            <div className='d-flex'>
              <LiaPiggyBankSolid size={50} className='p-1 me-md-3' />
              <h4 className='fs-6 my-auto'>Money Guarantee
                <br />
                <span className='fs-6 fw-light'>7 Days Back</span>  </h4>
            </div>
          </div>
        </div>

        <div className="col-md-3    " >
          <div className="border rounded-2">
            <div className='d-flex'>
              <BiSolidTimer size={50} className='p-1 me-md-3' />
              <h4 className='fs-6 my-auto'>365 Days
                <br />
                <span className='fs-6 fw-light'>For free return</span>   </h4>
            </div>
          </div>
        </div>

        <div className="col-md-3    ">
          <div className="border rounded-2">
            <div className='d-flex'>
              <BsCreditCard2Back size={50} className='p-1 me-md-3' />
              <h4 className='fs-6 my-auto'>Payment
                <br />
                <span className='fs-6 fw-light'>Secure system</span>  </h4>
            </div>
          </div>
        </div>

      </div>
    </div>

  </>
  )
}

import { TbTruckDelivery } from 'react-icons/tb';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import { BiSolidTimer } from 'react-icons/bi';
import { BsCreditCard2Back } from 'react-icons/bs';

export default HeroFeatures