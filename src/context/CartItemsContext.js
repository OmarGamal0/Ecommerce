import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartItemsContext = createContext({});

export function CartItemsContextProvider(props) {
    const [cartItems, setCartItems] = useState(() => {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
    const [productsData, setProductsData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    async function getProductData() {
        let { data } = await axios.get(`https://ecommerce-icyc.onrender.com/api/products?populate=*`);
        setProductsData(data.data);
    }

    function getFilteredItems() {
        let x = productsData.filter(item => cartItems.includes(item.id));
        setFilteredItems(x);
    }

    useEffect(() => {
        getProductData();
    }, []);

    useEffect(() => {
        getFilteredItems();
    }, [cartItems, productsData]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <cartItemsContext.Provider value={{ cartItems, setCartItems, filteredItems, setFilteredItems }} >
            {props.children}
        </cartItemsContext.Provider>
    );
}
