import React from 'react'
import Item from './Item'




const ItemList = ({ products }) => {
    return (
        <div className='flex justify-evenly mt-20   '>
            < Item item={products.map((product) => <ul className=' shadow-sm p-4 ' key={product.id}>
                <li className='flex justify-center text-3xl mb-8 '> {product.title}</li>
                <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={product.pictureUrl} alt="" /> </li>
                <li className='flex justify-center mb-8 w-80'> {product.description}</li>
                <li className='flex justify-end text-xl '> ${product.price}</li>          
            </ul>)} />
           

        </div>

    )
}

export default ItemList
