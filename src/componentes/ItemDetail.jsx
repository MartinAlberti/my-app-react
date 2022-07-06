
import React from 'react'
import CarouselFotos from './CarouselFotos'



const ItemDetail = ({details }) => {
  return (
    <>
    
    <div className='flex justify-evenly mt-20 	  '>
      {details.map((details) => <ul className=' shadow-sm p-4 w-80 h-120 ' key={details.id}>
        <li className='flex justify-center text-2xl mb-8 '> {details.title}</li>  
        <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={details.picture1} alt="" /> </li>
        <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={details.picture2} alt="" /> </li>
        <li className='flex justify-center mb-4' > <img className='w-60 h-60 ' src={details.picture3} alt="" /> </li>
        <li className='flex justify-center mb-8 w-80'> {details.description}</li>
        <li className='flex justify-end self-end text-xl '> ${details.price}</li>
      </ul>)}

    </div></>
  )
}

export default ItemDetail