
import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"



const ItemDetail = ({ item }) => {

  const [comprar, setComprar] = useState(false)




  const onAdd = (cuenta) => {
    setComprar(true)
    console.log("agregado", cuenta)


  }
  return (
    <>

      <div className='flex justify-evenly mt-20 	  '>
        {item.map((item) => <ul className=' shadow-sm p-4 w-80 h-120 ' key={item.id}>
          <li className='flex justify-center text-2xl mb-8 '> {item.title}</li>
          <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={item.pictureUrl} alt="" /> </li>
          <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={item.picture2} alt="" /> </li>
          <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={item.picture3} alt="" /> </li>
          <li className='flex justify-center mb-8 w-80'> {item.description}</li>
          <li className='flex justify-end self-end text-xl '> ${item.price}</li>
          <li> {comprar === false
            ? <ItemCount stock={5} initial={0} onAdd={onAdd} />
            : <Link to="/Cart"> <button className='mt-6 bg-blue-100 pl-4 pr-4 pt-1 pb-1'>Finalizar Compra</button> </Link>} </li>


        </ul>)}

      </div></>
  )
}

export default ItemDetail