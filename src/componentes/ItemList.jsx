import React from 'react'
import Item from './Item'
import { Link } from "react-router-dom"




const ItemList = ({ products }) => {
    return (
        <div className='flex justify-evenly mt-20   '>
            < Item item={products.map((product) => <ul className=' shadow-sm p-4 w-80 h-120 ' key={product.id}>
                <li className='flex justify-center text-2xl mb-8 '> {product.title}</li>
                <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={product.pictureUrl} alt="" /> </li>
                <li className='flex justify-end self-end text-xl '> ${product.price}</li>  
                <li> <Link to="/item">  ver detalles  </Link>   </li>   
            </ul>)} />        

        </div>

    )
}

export default ItemList
