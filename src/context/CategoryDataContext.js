import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let categoryDataContext = createContext({});


export function CategoryDataContextProvider(props) {

    const [menData, setMenData] = useState('')
    const [womenData, setWomenData] = useState('')

    async function getCategoriesData(Category, callback) {
        let prodact = await axios.get(`https://ecommerce-icyc.onrender.com/api/products?populate=*&filters[Category][$eq]=${Category}`)
        callback(prodact.data.data)

    }

    useEffect(() => {
        getCategoriesData('men', setMenData)
        getCategoriesData('women', setWomenData)
    }, [])

    return <>
        <categoryDataContext.Provider value={{ menData, womenData }}>
            {props.children}
        </categoryDataContext.Provider>

    </>

}