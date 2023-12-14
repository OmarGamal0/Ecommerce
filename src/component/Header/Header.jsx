import React, { useContext, useEffect } from 'react'
import { Categories, NavBar, SearchBar } from '../../container'
import { moodContext } from '../../context/MoodContext';

import './header.css'
function Header() {
  let { darkMode } = useContext(moodContext);
    
  return (<>
    <div className={darkMode ? " dark-mode ecommerce_header  " : ' '}>
      <NavBar />
      <SearchBar />
      <Categories />
    </div>

  </>
  )
}

export default Header