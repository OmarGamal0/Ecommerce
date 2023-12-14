import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { MdOutlineShoppingCart } from 'react-icons/md'

import './footer.css'
function Footer() {
  return (<>
    <div className="ecommerce_footer__bg ">
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-md-4 col-sm-12 mt-5 mb-2" >
            <div>
              <div className='text-start'>
                <MdOutlineShoppingCart className='fs-3 p-0 mx-4' />
                <h4 className="nav-link fw-bold p-0" aria-current="page">E-commerce</h4>
              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aperiam dignissimos corrupti harum magnam eveniet iure expedita magni incidunt! Alias.</p>
            </div>
          </div>

          <div className="col-md-2 col-6 mt-5 mb-2" >
            <div>

              <h6 className='mb-2'>About Us</h6>
              <p className='my-1 fw-light'>Careers</p>
              <p className='my-1 fw-light'>Our Stores</p>
              <p className='my-1 fw-light'> Our Cares</p>
              <p className='my-1 fw-light'>Terms & Conditions</p>
              <p className='my-1 fw-light'>Privacy Policy</p>
            </div>
          </div>

          <div className="col-md-2 col-6 mt-5 mb-2" >
            <div>
              <h6 className='mb-2'>Customer Care</h6>
              <p className='my-1 fw-light'>Help Center</p>
              <p className='my-1 fw-light'>Track Your Order</p>
              <p className='my-1 fw-light'>Corporate & Bulk Purchasing</p>
              <p className='my-1 fw-light'>Returns & Refunds</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-12 mt-5 mb-2" >
            <div>
              <h6 className='mb-2'>Contact Us</h6>
              <p className='my-1 fw-light'>70 Washington Square South, New York, NY 10012, United States</p>
              <p className='my-1 fw-light'>Email: uilib.help@gmail.com</p>
              <p className='my-1 fw-light'> Phone: +1 1123 456 780</p>
              <div className="">
                <BsInstagram className='me-1' />
                <BsFacebook className='m-1' />
                <BsTwitter className='m-1' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  )
}
export default Footer