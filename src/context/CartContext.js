import React, { createContext, useState, useEffect } from 'react'
import Item from '../componentes/Item';

export const cartContext = createContext();
const { Provider } = cartContext;


const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState([])


    const getQtyProducts = () => {
        

    }

    const addProduct = (item, cuenta) => {
        const newProduct = { ...item, qty: cuenta }
        setProducts(newProduct)
        console.log(products)
    }


    const deleteProduct = () => {

    }

    const isInCart = () => {

    }


    const clear = () => {
        setProducts([])


    }


    useEffect(() => {

    }, [])
    return (
        <Provider value={{ products, addProduct, deleteProduct, clear, qtyProducts,  }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider