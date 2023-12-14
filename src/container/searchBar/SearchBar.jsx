import React from 'react'
import './searchBar.css';
function SearchBar() {

  return (<>
    <nav className="navbar navbar-expand-lg py-3 " >
      <div className="container" >
        <div className="navbar-collapse row " id="navbarSupportedContent">

          <div className="col-md-3 ">
            <div>
              <ul className="navbar-nav  me-auto text-center justify-content-start ">
                <li className="nav-item">
                  <MdOutlineShoppingCart className='fs-4 p-0' />
                  <h4 className="fs-6 fw-bold p-0" aria-current="page">E-commerce</h4>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <form className="d-flex  m-auto  " role="search">
                <input className="form-control border-dark-subtle  border-end-0 rounded-start-pill ps-4 py-0  " type="search" placeholder='search' aria-label="Search" />

                <div className="btn-group" role="group">
                  <select className="bg-ligh border-dark-subtle border-start rounded-end-pill dropdown-toggle py-2 px-4 " aria-label=" select example">
                    <option value="1">All categores </option>
                    <option value="2">AR</option>
                  </select>
                </div>

              </form>
            </div>

          </div>

          <div className="col-md-3">
            <div>
              <ul className="navbar-nav my-auto ms-auto justify-content-end  ">
                <li className="nav-item text-center ">
                  <BsPerson className='fs-4 m-2' />
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>
  </>
  )
}
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export default SearchBar