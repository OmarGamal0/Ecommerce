import React, { useContext, useEffect, useState, } from 'react'
import { categoryDataContext } from '../../context/CategoryDataContext';
import MainContentPopUp from '../mainContentPopUp/MainContentPopUp';

function WomenData() {
  let data = useContext(categoryDataContext);
  let womenData = data.womenData

  let { cartItems, setCartItems } = useContext(cartItemsContext);

  function pushCartItem(productId) {
    let updateCartItems = [...cartItems, productId]
    setCartItems(updateCartItems);
  }
  return (<>
    {womenData ? womenData.map((categoryData, index) => <>
      <React.Fragment key={index}>
      <div className=" col-md-3 py-1 my-1">
        <div className=" ecommerce_mainContent__card  card text-center" >

          <img src={categoryData.attributes.productImg.data[1].attributes.url} className="card-img-top p-4 " data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`} alt="..." />

          <div className="card-body">
            <h3 >{categoryData.attributes.productTitle}</h3>
            <h5 >{'$' + categoryData.attributes.productPrice}</h5>
            <FaStar className='fs-2 text-warning' />
            <span className="  mx-1 badge rounded-pill bg-danger">
              {categoryData.attributes.productRating}
              <span className="visually-hidden">unread messages</span>
            </span>
            <br />
            <button onClick={() => pushCartItem(categoryData.id)} className='btn btn-outline-dark m-1 py-1 mt-3'>
              add to card
            </button>
          </div>
        </div>
      </div>
      <MainContentPopUp product={categoryData.attributes} productId={index}/>
      </React.Fragment>
    </>) : <span className='spinner-border'></span>}
  </>
  )
}
import { FaStar } from "react-icons/fa";
import { cartItemsContext } from '../../context/CartItemsContext';
export default WomenData