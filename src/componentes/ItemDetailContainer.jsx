import { React, useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import ScaleLoader from "react-spinners/ScaleLoader";





const ItemDetailContainer = () => {
  const [details, setDetails] = useState([])
  const [loader, setLoader] = useState(true)


  useEffect(() => {
setTimeout(() => {
  fetch("details.json")

      .then(res => res.json())
      .then(data => setDetails(data))
      .then(setLoader(false))
}, 3000);

    

  }, []);


  return (
    <>
      {loader === false ? <ItemDetail details={details} /> : <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5" /></div>}
    </>)
}

export default ItemDetailContainer