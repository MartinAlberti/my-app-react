import React, { createContext, useState, useEffect } from 'react'


export const CartContext = createContext();
const { Provider } = CartContext;


const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0)



    const getQtyProducts = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty
        })
        setQtyProducts(qty);
    }


    useEffect(() => {
        getQtyProducts()
    }, [products])

    const addProduct = (item) => {
        if (isInCart(item.id)) {
            const found = products.find(p => p.id === item.id)
            const index = products.indexOf(found)
            const aux = [...products]
            aux[index].qty += item.qty
            setProducts(aux)
            console.log("duplicado")


        }
        else {

            setProducts([...products, item])
        }

    }


    const deleteProduct = (id) => {

        setProducts(products.filter(product => product.id !== id));
    }

    const isInCart = (id) => {
        products.some(product => product.id === id)


    }


    const clear = () => {
        setProducts([])


    }

    return (
        <Provider value={{ products, addProduct, deleteProduct, clear, qtyProducts }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider