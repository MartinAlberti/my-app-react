import React from 'react'
import Item from './Item'
import { Link } from "react-router-dom"




const ItemList = ({ products }) => {
    return (
        <div className='flex flex-wrap m-8 '>
            < Item item={products.map((product) =>
                <ul className='w-60 m-8 ' key={product.id}>
                    <li className=' h-16 text-xl  flex place-content-center text-xl text-center mb-12'> {product.title}</li>
                    <li className='flex place-content-center text-xl  mb-12'><img className='h-40 w-40  ' src={product.image} alt="" /> </li>
                    <li className='flex place-content-end text-xl  '> ${product.price}</li>
                    <li className='flex place-content-end text-xl bg-blue-100 pl-4 pr-4 pt-1 pb-1 '><button onClick={product.id}> <Link className='' to={`/product/${product.id}`}>  ver detalles </Link></button></li>
                </ul>)} />

        </div>


    )
}

export default ItemList
