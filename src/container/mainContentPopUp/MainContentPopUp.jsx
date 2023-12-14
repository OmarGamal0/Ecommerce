import React, { useContext, useState } from 'react'
import { moodContext } from '../../context/MoodContext';

function MainContentPopUp({ product, productId }) {
  let { darkMode } = useContext(moodContext);
  
  const [selectedImg, setSelectedImg] = useState(product.productImg.data[1].attributes.url);
  function pushCartItem(productId) {
    let updateCartItems =[...cartItems,productId]
    setCartItems(updateCartItems);
    
  }
  return (<>

    <div className="modal fade" id={`exampleModal${productId}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${productId}`} aria-hidden="true">
      <div className=" modal-dialog  modal-lg modal-dialog-centered">
        <div className={darkMode ? "modal-content bg-black" : "modal-content  "}>

          <button type="button" className={darkMode ? "btn-close  bg-danger ms-auto  my-3 mx-4" : "btn-close btn btn-dark ms-auto  my-3 mx-4"} data-bs-dismiss="modal" aria-label="Close"></button>

          <div className="modal-body ">
            <div className="row">
              <div className="col-md-12">
                <div className="row justify-content-between">

                  <div className="col-md-6">
                    <img src={selectedImg} className='w-100 p-2' alt="" />
                  </div>

                  <div className="col-md-6 text-left">
                    <h4 className=' fw-bold'>{product.productTitle}</h4 >
                    <p>{product.prodactDecription}</p>
                    <FaStar className='fs-2 text-warning' />
                    <span className=" mx-1 badge rounded-pill bg-danger">
                      {product.productRating}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                    <h2 className=' fw-bold text-danger'>{'$' + product.productPrice}</h2 >

                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {product.productImg.data.map((img, index) => <div key={index} className="col-4 ">
                            <img className='w-100 h-100 p-2  shadow-sm rounded' onClick={()=>setSelectedImg(img.attributes.url)} src={img.attributes.url} alt="" />
                          </div>)}
                        </div>
                      </div>
                    </div>

                    <button  onClick={() => pushCartItem(product.id)}
                      className={darkMode ? "btn btn-outline-danger m-1 py-1 my-1" : 'btn btn-outline-dark m-1 py-1 mt-3'}> add to card
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}
import { FaStar } from "react-icons/fa";

export default MainContentPopUp
