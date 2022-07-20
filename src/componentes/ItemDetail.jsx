
import React, { useState, useContext } from 'react'
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'





const ItemDetail = ({ item }) => {

  const [comprar, setComprar] = useState(false)
  const { addProduct } = useContext(CartContext);




  const onAdd = (cuenta) => {

    addProduct({ ...item, qty: cuenta });
    setComprar(true);
    console.log("agregado", cuenta)
  }
  return (


    <div className='m-16 '>
      <h1 className='flex place-content-center text-3xl	mb-12'>{item.title}</h1>
      <div className='flex place-content-center mb-12	'><img className='h-80 w-70 ' src={item.image} alt="" /></div>
      <div>
        <p className='flex place-content-center text-xl text-center mb-12'>{item.description}</p>
        <p className='flex place-content-center	mb-12 text-3xl'>${item.price}</p>
      </div>
      {comprar === false
        ? <ItemCount stock={5} initial={1} onAdd={onAdd} />
        : <Link to="/Cart"> <div className='flex place-content-center'><button className='mt-6 bg-blue-100 pl-4 pr-4 pt-1 pb-1 text-2xl '>Finalizar Compra</button></div> </Link>}
    </div>


  )
}

export default ItemDetail