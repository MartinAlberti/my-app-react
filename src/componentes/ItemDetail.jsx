
import React from 'react'




const ItemDetail = ({item}) => {
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
      </ul>)}

    </div></>
  )
}

export default ItemDetail