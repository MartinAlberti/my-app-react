import { React, useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";






const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const {itemId} = useParams()

  const [loader, setLoader] = useState(true)


  useEffect(() => {
const productFound = products.find (product => product.id === itemId)
    
    setTimeout(() => {
      fetch("productos.json")

        .then(res => res.json())
        .then(data => setProducts(data))
        .then(setLoader(false))
        .then(console.log(productFound))
    }, 1500);



  }, [itemId]);


  return (
    <>
      {loader === false ? <ItemDetail item={products} /> : <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5" /></div>}
    </>)
}

export default ItemDetailContainer