
import React from 'react'




const ItemDetail = ({productos }) => {
  return (
    <>
    
    <div className='flex justify-evenly mt-20 	  '>
      {productos.map((productos) => <ul className=' shadow-sm p-4 w-80 h-120 ' key={productos.id}>
        <li className='flex justify-center text-2xl mb-8 '> {productos.title}</li>  
        <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={productos.pictureUrl} alt="" /> </li>
        <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={productos.picture2} alt="" /> </li>
        <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={productos.picture3} alt="" /> </li>
        <li className='flex justify-center mb-8 w-80'> {productos.description}</li>
        <li className='flex justify-end self-end text-xl '> ${productos.price}</li>
      </ul>)}

    </div></>
  )
}

export default ItemDetail