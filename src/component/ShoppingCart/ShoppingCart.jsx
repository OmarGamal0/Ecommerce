import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BsBag } from "react-icons/bs";
import { CiCircleMinus , CiCirclePlus} from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { cartItemsContext } from '../../context/CartItemsContext';
import { bag } from '../../image/image';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  let { filteredItems, setFilteredItems, setCartItems, cartItems } = useContext(cartItemsContext);
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQuantity = (productId) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[productId] = (updatedQuantities[productId] || 0) + 1;
    setItemQuantities(updatedQuantities);
  };

  const decreaseQuantity = (productId) => {
    const updatedQuantities = { ...itemQuantities };
    if (updatedQuantities[productId] > 1) {
      updatedQuantities[productId] -= 1;
      setItemQuantities(updatedQuantities);
    }
  };

  const removeItem = (index) => {
    const newFilteredItems = [...filteredItems];
    const newCartItems = [...cartItems];
    newFilteredItems.splice(index, 1);
    newCartItems.splice(index, 1);
    setFilteredItems(newFilteredItems);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    let newTotalPrice = 0;
    filteredItems.forEach(item => {
      newTotalPrice += item.attributes.productPrice * (itemQuantities[item.id] || 1);
    });
    setTotalPrice(newTotalPrice);
  }, [filteredItems, itemQuantities]);


  return (
    <>
      <button className="btn btn-danger position-fixed rounded-circle p-2 shadow position-relative" style={{ right: '2%', bottom: '4%', zIndex: '3000' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{filteredItems.length > 0 ? filteredItems.length : ''}</span>
        <MdOutlineShoppingCart className='fs-3' />
      </button>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-4" id="offcanvasExampleLabel">
            <BsBag className='fs-4 mb-2' />  <span>{filteredItems.length > 0 ? filteredItems.length : ''}</span> Item</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <hr className='my-1 mx-1 text-body-tertiary' />

        <div className="offcanvas-body">
          {filteredItems ? filteredItems.map((item, index) => (
            <div className="container " key={index}>
              <div className='row'>
                <div className="col-2 text-center">
                  <div className='item'>
                    <button className='border-0 rounded-circle p-1 btn btn-outline-danger ' onClick={() => increaseQuantity(item.id)}><CiCirclePlus className='fs-4' /></button>
                    <h6 className='my-0 fs-5'>{itemQuantities[item.id] || 1}</h6>
                    <button className='border-0 rounded-circle p-1 btn btn-outline-dark' onClick={() => decreaseQuantity(item.id)}><CiCircleMinus className='fs-4' /></button>
                  </div>
                </div>

                <div className="col-3 my-auto">
                  <img className='w-100' src={item.attributes.productImg.data[0].attributes.url} alt={item.attributes.productTitle} />
                </div>

                <div className="col-6 my-auto">
                  <div className='py-2'>
                    <h6 className='fs-6 m-0'>{item.attributes.productTitle}</h6>
                    <p className='m-0 text-body-tertiary' style={{ fontSize: '12px' }}>{'$' + item.attributes.productPrice + ' * ' + (itemQuantities[item.id] || 1)}</p>
                    <p className='m-0 text-danger'>{'$' + (item.attributes.productPrice * (itemQuantities[item.id] || 1))}</p>
                  </div>
                </div>

                <div className="col-1  d-flex flex-column justify-content-center align-items-center">
                  <button className='border-0 btn btn-outline' onClick={() => removeItem(index)}><IoIosClose size={'25'} /></button>
                </div>
              </div>
              <hr className='mx-1 text-body-tertiary' />
            </div>
          )) : ''}

          {filteredItems.length === 0 ? (
            <div className='container'>
              <div className="row">
                <div className="col-12 p-5">
                  <img className='w-100 p-5 pb-2 opacity-50' src={bag} alt="" />
                  <p className='text-center text-body-tertiary'>Your shopping bag is empty.<br /> Start shopping</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="item">
                    <Link to='CheckOut'><button className='btn btn-danger w-100'>Check out (${totalPrice})</button></Link> 
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ShoppingCart;
