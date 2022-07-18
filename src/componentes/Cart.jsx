import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'





const Cart = () => {

  const { products } = useContext(CartContext)
  const { deleteProduct } = useContext(CartContext)

  const onDelete = () => {
    const productId = products.id
    deleteProduct(productId);


  }

  return (
    <div className='m-16 '>
      <h1 className='flex place-content-center text-3xl	mb-12'>{products.title}</h1>

      <div className='flex place-content-center mb-12	'><img className='h-80 w-70 ' src={products.image} alt="" /></div>
      <div>
        <p className='flex place-content-center text-xl text-center mb-12'>{products.description}</p>
        <p className='flex place-content-center	mb-12 text-3xl'>${products.price}</p>
        <button onClick={() => onDelete()}>Eliminar</button>
      </div>

    </div>
  )
}

export default Cart