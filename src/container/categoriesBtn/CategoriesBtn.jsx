import React from 'react'

import {BiSolidCategory } from 'react-icons/bi';
import {GrBike } from 'react-icons/gr';
import {AiOutlineLaptop } from 'react-icons/ai';
import {PiBooks } from 'react-icons/pi';
import {IoLogoGameControllerB } from 'react-icons/io';
import {RxDragHandleHorizontal } from 'react-icons/rx';

import CategoriesPopUp from './CategoriesBtnPopUp';
function Categories() {
  return (
    <div className="container">
    <div className="row justify-content-between">

    <div className="col-3  ">
      <div className="btn-group w-75 py-2 " role="group">
        <button type="button" className="btn border border-1  rounded-1 dropdown-toggle ps-2 text-start text-secondary " data-bs-toggle="dropdown" aria-expanded="false">
        <BiSolidCategory className='fs-3 me-2 '/> Categories
        </button>

        <ul className="dropdown-menu w-100">
          <li><a className="dropdown-item" href="#"><GrBike size={22} className='me-3'/>Bikes</a></li>
          <li><a className="dropdown-item" href="#"><AiOutlineLaptop size={22} className='me-3'/>Electronics</a></li>
          <li><a className="dropdown-item" href="#"><PiBooks size={22} className='me-3'/>Books</a></li>
          <li><a className="dropdown-item" href="#"><IoLogoGameControllerB size={22} className='me-3'/>Game</a></li>
        </ul>

      </div>  
    </div>

    <div className='col-6 '>
    <div className="  d-flex flex-row-reverse ">
       <nav className="navbar navbar-expand-lg m-0 p-0!   ">
        
          <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <RxDragHandleHorizontal/>
          </button>
          <CategoriesPopUp/>

          <div className="collapse navbar-collapse  " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mx-2   dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
                </a>
                <DropdwonContent/>
              </li>
              
              <li className="nav-item mx-2   dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mega Menu
                </a>
                <DropdwonContent/>
              </li>

              <li className="nav-item mx-2   dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
                </a>
                <DropdwonContent/>
              </li>

              <li className="nav-item mx-2   dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User Account
                </a>
                <DropdwonContent/>
              </li>

            </ul>
          </div>
       
       </nav>
    </div>
    </div>
      
  

    </div>
    </div>   



  )
}

function DropdwonContent() {
  return(  <>
  <ul className="dropdown-menu">
  <li><a className="dropdown-item" href="#">Action</a></li>
  <li><a className="dropdown-item" href="#">Another action</a></li>
  <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </>)
}

export default Categories