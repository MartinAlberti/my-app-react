import  React,{ useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";






const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        .catch(err=>console.log(err))
        .finally(()=>setLoader(false))
}, [productId]);


  return (
    <>
      {loader === false ? <ItemDetail item={product} /> : <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5" /></div>}
    </>)
}

export default ItemDetailContainer