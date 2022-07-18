import React, { createContext, useState, useEffect } from 'react'
import Item from '../componentes/Item';

export const CartContext = createContext();
const { Provider } = CartContext;


const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);


    const addProduct = (item, cuenta) => {
        let newProduct = { ...item, qty: cuenta }
        setProducts(newProduct)

        console.log(products)

    }


    const deleteProduct = (productId) => {
        const productCopy = [products]
        const toDelete = productCopy.filter(obj => {
            return obj.id !== productId
        })
        setProducts(toDelete)
        console.log(toDelete)
        console.log(products)


    }

    const isInCart = (item) => {


    }


    const clear = () => {
        setProducts([])


    }

    return (
        <Provider value={{ products, addProduct, deleteProduct, clear, }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider