import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { moodContext } from '../../context/MoodContext';

import './mainContent.css'
function MainContent() {
  let { darkMode } = useContext(moodContext);

  const [selectedAll, setSelectedAll] = useState(true);
  const [selectedMen, setSelectedMen] = useState(false);
  const [selectedWomen, setSelectedWomen] = useState(false);
  console.log(selectedAll)
  const toggleSelected = (set, x) => {
    if (!x) {
      setSelectedAll(false)
      setSelectedMen(false)
      setSelectedWomen(false)
    }
    set(!x);
  };
  
  return (
    <div className={darkMode ? " dark-mode ecommerce_mainContent" : ""}>
      <div className='container py-4 '>
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-between  ">

              <div className="col-md-4">
                <h3 className='fw-bolder'>Selected Products</h3>
                <p style={{ fontSize: '15px' }}>All our new arrivals in a exclusive brand selection</p>
              </div>

              <div className="col-md-4  d-flex flex-row-reverse ">
                <Link to={'women'}><button onClick={() => toggleSelected(setSelectedWomen, selectedWomen)} className={selectedWomen ? 'btn btn-danger  mx-1' : 'btn btn-outline-danger  mx-1'}>Women</button></Link>
                <Link to={'men'}><button onClick={() => toggleSelected(setSelectedMen, selectedMen)} className={selectedMen ? 'btn btn-danger  mx-1' : 'btn btn-outline-danger  mx-1'}>Men</button></Link>
                <Link to={'allData'}><button onClick={() => toggleSelected(setSelectedAll, selectedAll)} className={selectedAll ? 'btn btn-danger  mx-1' : 'btn btn-outline-danger  mx-1'}>All</button></Link>

              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}



export default MainContent