import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export let dataContext = createContext({});



export function DataContextProvider(props) {

const [productsData, setproductsData] = useState('');

async function getProductData() {
  let {data} = await axios.get(`https://ecommerce-icyc.onrender.com/api/products?populate=*`);
  setproductsData(data);
  
}

useEffect(() => {
  getProductData()
}, [])


  return (<>
  
 <dataContext.Provider value={productsData}>
 {props.children}
 </dataContext.Provider>

  </>
  )
}

  