import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'








const Cart = () => {

  const { products } = useContext(CartContext)
  const { deleteProduct } = useContext(CartContext)
  const { clear } = useContext(CartContext)
  console.log(products)


  const onDelete = () => {
    const id = products.id
    deleteProduct(id)

  }
  const emptyCart = () => {
    clear()
  }
  return (
    <>
      {products.length === 0
        ? <h1>No agregaste ningun producto. Busca <Link to="/" >aca </Link> </h1>
        : <> <button onClick={() => emptyCart()}>Vaciar Carrito</button>
          <div className='flex flex-wrap m-8 '>
            {products.map((product) =>
              <ul className='w-60 m-8 ' key={product.id}>
                <li className=' h-16 text-xl  flex place-content-center text-xl text-center mb-12'> {product.title}</li>
                <li className='flex place-content-center text-xl  mb-12'><img className='h-40 w-40  ' src={product.image} alt="" /> </li>
                <li className='flex place-content-end text-xl  '> ${product.price}</li>
                <li className='flex place-content-end text-xl bg-blue-100 pl-4 pr-4 pt-1 pb-1 '><button onClick={() => onDelete(products.id)}> Eliminar </button></li>
              </ul>)}
          </div></>

      }

    </>)
}

export default Cart