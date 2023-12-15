import React, { useState } from 'react';

function CheckoutPage() {
 

  return (
<div className="checkout-container container mt-5">
      <div className="delivery-details mb-3">
        <h2>Delivery Details</h2>
        <input type="date" className="form-control mb-2" placeholder="Delivery Date" />
        <input type="time" className="form-control mb-2" placeholder="Delivery Time" />
        <input type="text" className="form-control" placeholder="Address" />
      </div>

      <div className="payment-details mb-3">
        <h2>Payment Information</h2>
        <input type="text" className="form-control mb-2" placeholder="Cardholder Name" />
        <input type="text" className="form-control mb-2" placeholder="Card Number" />
        <input type="text" className="form-control mb-2" placeholder="Expiration Date" />
        <input type="text" className="form-control" placeholder="CVV" />
      </div>

      <div className="voucher-section mb-3">
        <h2>Voucher</h2>
        <input type="text" className="form-control" placeholder="Voucher Code" />
      </div>

      <div className="order-summary mb-3">
        <h2>Order Summary</h2>
      </div>

      <div className="submit-button">
        <button type="submit" className="btn btn-primary">Place Order</button>
      </div>
    </div>
  );
}

export default CheckoutPage;
