import React, { createContext, useState, useEffect } from 'react'
import Item from '../componentes/Item';

export const CartContext = createContext();
const { Provider } = CartContext;


const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);


    const addProduct = (item) => {
        if (isInCart(item.id)) {

            const aux = [...products]
            const found = aux.find(p => p.id === item.id)
            found.qty += item.qty
            setProducts(aux)


        }
        else {

            setProducts([...products, {...item}])

            console.log(products)
        }

    }


    const deleteProduct = (id) => {
        let aux = [...products]
        aux = aux.filter((p) => p.pd !== id)


        console.log(id)
        setProducts(aux)


    }

    const isInCart = (id) => {
        products.some(product => product.id === id)


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