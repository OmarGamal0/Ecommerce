import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../context/DataContext';
import { MainContentPopUp } from '..';
import { FaStar } from "react-icons/fa";
import { cartItemsContext } from '../../context/CartItemsContext';

function AllContentData() {
  let { data } = useContext(dataContext);
  let {cartItems, setCartItems } = useContext(cartItemsContext);

  function pushCartItem(productId) {
    let updateCartItems =[...cartItems,productId]
    setCartItems(updateCartItems);
  }

  return (
    <>
      {data ? data.map((product, index) => (
        <React.Fragment key={index}>
          <div className="col-md-3 col-sm-6 py-1 my-1 ">
            <div className="ecommerce_mainContent__card card text-center "  >
              <img src={product.attributes.productImg.data[0].attributes.url} className="card-img-top p-4" alt="..." data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}/>

              <div className="card-body">
                <h3>{product.attributes.productTitle}</h3>
                <h5>{'$' + product.attributes.productPrice}</h5>
                <FaStar className='fs-2 text-warning' />
                <span className="  mx-1 badge rounded-pill bg-danger">
                  {product.attributes.productRating}
                  <span className="visually-hidden">unread messages</span>
                </span>
                <br />
                <button onClick={() => pushCartItem(product.id)} className='btn btn-outline-dark m-1 py-1 mt-3'>add to card</button>
              </div>
            </div>
          </div>
          <MainContentPopUp product={product.attributes} productId={index} />
        </React.Fragment>
      )) : <span className='spinner-border'></span>}
    </>
  );
}

export default AllContentData;
