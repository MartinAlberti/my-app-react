import React, { useContext } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../context/CartContext";




const CartWidget = () => {

    const { qtyProducts } = useContext(CartContext)
    


    return (
        <div
            className=""><ShoppingCartIcon sx={{ fontSize: 30 }} />
            <p>{qtyProducts}</p>
        </div>


    )
}

export default CartWidget