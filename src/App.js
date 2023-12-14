import React from 'react';
import { CheckOut, Footer, Header, HeroSection, MainContent, ShoppingCart } from './component';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoodContextProvider } from './context/MoodContext';
import './App.css';
import { DataContextProvider } from './context/DataContext';
import { CategoryDataContextProvider } from './context/CategoryDataContext';
import { CartItemsContextProvider } from './context/CartItemsContext';
import { AllContentData, MenData, WomenData } from './container';
function App() {


  return (<>

    <MoodContextProvider>
      <Header />
      <DataContextProvider>
        <CategoryDataContextProvider>
          <CartItemsContextProvider>
            <Routes>
              <Route path='CheckOut' element={<CheckOut />} />

              <Route path='ecommerce' element={<EcommerceComponent />}>
                <Route path='allData' element={<AllContentData />} />
                <Route path='*' element={<AllContentData />} />
                <Route path='men' element={<MenData />} />
                <Route path='women' element={<WomenData />} />
              </Route>
            </Routes>
            <ShoppingCart />
          </CartItemsContextProvider>
        </CategoryDataContextProvider>
      </DataContextProvider>
      
      <Footer />
    </MoodContextProvider>

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
export default App;
