import { React, useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import ScaleLoader from "react-spinners/ScaleLoader";






const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      fetch("productos.json")

        .then(res => res.json())
        .then(data => setProductos(data))
        .then(setLoader(false))
    }, 1500);



  }, []);


  return (
    <>
      {loader === false ? <ItemDetail productos={productos} /> : <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5" /></div>}
    </>)
}

export default ItemDetailContainer