import React, { useContext } from 'react'



import { BsFacebook , BsInstagram , BsTwitter ,} from 'react-icons/bs';
import {MdDragHandle ,  MdDarkMode ,  MdOutlineLightMode} from 'react-icons/md';

import'./navBar.css'
import { moodContext } from '../../context/MoodContext';

function NavBar() {
let {toggleDarkMode , darkMode } =useContext(moodContext);

  return (<>
  <nav className="ecommerce_navBar__ navbar navbar-expand-lg rounded-bottom-4 py-0 ">
  <div className="container">

  <h3 className="badge bg-danger rounded-4  my-auto ">Hot</h3>
  <span className=" fw-bold ps-2" >Free Express Shipping</span>

  <button   className="  navbar-toggler my-1 px-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <MdDragHandle className='text-white p-0 '/>
  </button>

    <div className="  collapse navbar-collapse" id="navbarNav">

      <ul  className="navbar-nav ms-auto mb-lg-0">
        <li onClick={()=>{  toggleDarkMode() }} className="nav-item my-auto me-3  py-sm-2">
          {darkMode? <MdOutlineLightMode className='fs-5 '/> : <MdDarkMode className='fs-5 '/>}
        </li>

        <li className="nav-item  my-auto">
          <select className="ecommerce__navBar_formSelect py-0  border-0 form-select " aria-label=" select example">
            <option value="1">EN</option>
            <option value="2">AR</option>
            </select>
        </li>

       <li className="nav-item my-auto me-auto ms-md-1 my-sm-2   ">
         <BsInstagram className='m-1'/>
         <BsFacebook className='m-1'/>
         <BsTwitter className='m-1'/>
        </li>
      </ul>

    </div>
  </div>
</nav>
   </>
  )
}

export default NavBar