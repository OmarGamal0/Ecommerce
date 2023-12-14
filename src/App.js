import React from 'react';
import { CheckOut, Footer, Header, HeroSection, MainContent, ShoppingCart } from './component';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { MoodContextProvider } from './context/MoodContext';
import { DataContextProvider } from './context/DataContext';
import { CategoryDataContextProvider } from './context/CategoryDataContext';
import { CartItemsContextProvider } from './context/CartItemsContext';
import { AllContentData, MenData, WomenData } from './container';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MoodContextProvider>
          <Header />
          <DataContextProvider>
            <CategoryDataContextProvider>
              <CartItemsContextProvider>

                <Routes>
                  <Route path='ecommerce' element={<Navigate replace to='/ecommerce/allData' />} />
                  <Route path='CheckOut' element={<CheckOut />} />
                  <Route path='ecommerce' element={<EcommerceComponent />}>
                    <Route path='allData' element={<AllContentData />} />
                    <Route path='men' element={<MenData />} />
                    <Route path='women' element={<WomenData />} />
                  </Route>
                  <Route path='*' element={<NotFoundPage />} /> 
                </Routes>

                <ShoppingCart />
              </CartItemsContextProvider>
            </CategoryDataContextProvider>
          </DataContextProvider>
          <Footer />
        </MoodContextProvider>
      </BrowserRouter>
    </>
  );
}

function EcommerceComponent() {
  return (
    <>
      <HeroSection />
      <MainContent />
    </>
  );
}

function NotFoundPage() {
  return (
    <div className="container text-center mt-5 vh-100 ">
      <h1 style={{ fontSize: '80px' }} className='fw-bold'>404</h1>
      <p>page not found </p>
      <Link to={'ecommerce/allData'}>
        <button className='btn btn-danger'>Back To Home</button>
      </Link>
    </div>
  );
};
export default App;
