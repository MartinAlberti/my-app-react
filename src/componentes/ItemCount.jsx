import React, { useState } from 'react'


const ItemCount = ({ stock, initial }) => {

    const [cuenta, setCuenta] = useState(initial)

    const sumar = () => {
        cuenta < stock && setCuenta(cuenta + 1)
        cuenta >= stock && alert("No hay mas Stock")
    }
    const restar = () => {
        cuenta > 0 && setCuenta(cuenta - 1)

    }

    const onAdd = () => {
        cuenta > 0 && alert(`Compraste ${cuenta} guitarras. `)
        cuenta === 0 && alert("Agrega algun producto")
    }

    return (
        <>
            <div className="text-3xl flex justify-center mt-12    ">
                <button className='bg-blue-100 w-10 h-10' onClick={restar}> - </button>
                <p className='mx-12  '>{cuenta}</p>
                <button className='bg-blue-100 w-10 h-10' onClick={sumar}> + </button>
            </div>
            <div className="text-xl flex justify-center mt-4 ">
                <button className=' mt-6 bg-blue-100 pl-4 pr-4 pt-1 pb-1' onClick={onAdd}> comprar </button>


            </div>
        </>
    )
}


export default ItemCount