import React, { useContext, useState } from 'react';
import { moodContext } from '../../context/MoodContext';
import { cartItemsContext } from '../../context/CartItemsContext';

function CheckoutPage() {
  let { darkMode } = useContext(moodContext);
  let { totalPrice, filteredItems, itemQuantities } = useContext(cartItemsContext);

  return (
    <div className='bg-white '>
    <div className={darkMode ? " dark-mode container m  y-5 " : "container my-5  "}>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <div className="delivery-details mb-5">
            <h2 className='mb-4'>Delivery Details</h2>
            <input type="date" className="form-control mb-2" placeholder="Delivery Date" />
            <input type="time" className="form-control mb-2" placeholder="Delivery Time" />
            <input type="text" className="form-control" placeholder="Address" />
          </div>

          <div className="payment-details mb-5">
            <h2 className='mb-4'>Payment Information</h2>
            <input type="text" className="form-control mb-2" placeholder="Cardholder Name" />
            <input type="text" className="form-control mb-2" placeholder="Card Number" />
            <input type="text" className="form-control mb-2" placeholder="Expiration Date" />
            <input type="text" className="form-control" placeholder="CVV" />
          </div>

          <div className="voucher-section mb-3">
            <h2 className='mb-4'  >Voucher</h2>
            <input type="text" className="form-control" placeholder="Voucher Code" />
          </div>
        </div>

        <div className="col-md-5 bg-body-tertiary rounded-1  h-100 ">
          <div className="order-summary mt-2 mb-4 text-center">
            <h2 className='fs-3 mb-4'>Order Summary</h2>
            {filteredItems ? filteredItems.map((item, index) => (
              <div className="container p " key={index}>
                <div className='row justify-content-between'>
                  <div className="col-6 my-auto text-start">
                    <div className='py-2'>
                      <p className='m-0 text-black' style={{ fontSize: '15px' }}>{(itemQuantities[item.id] || 1) + 'x' + item.attributes.productTitle}</p>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    <div>
                      <p className='m-0 text-danger'>{'$' + (item.attributes.productPrice * (itemQuantities[item.id] || 1)) + '.00'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )) : ''}
            <hr className='mx-2' />
            <div className="container">
              <div className="row">
                <div className="col-6 text-start">
                  <div>
                    <p>Subtotal:</p>
                    <p>Shipping:</p>
                    <p>Tax:</p>
                    <p>Discount:</p>
                  </div>
                </div>

                <div className="col-6 text-end">
                  <div>
                    <p>{'$' + (totalPrice || 1) + '.00'}</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='mx-2' />
            <div className="container ">
              <div className="row">
                <div className="col-6 text-start">
                  <div>
                    <p>Total:</p>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <div>
                    <p>{'$' + (totalPrice || 1) + '.00'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="submit-button">
        <button type="submit" className="btn btn-danger">Place Order</button>
      </div>
    </div>
    </div>
  );
}

export default CheckoutPage;
