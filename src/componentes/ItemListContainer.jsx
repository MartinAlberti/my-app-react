import { React, useEffect, useState } from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const resultado = useParams();
    console.log(resultado)

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch("productos.json")
                .then(res => res.json())
                .then(data => setProducts(data))
                .then(setLoader(false))
        }, 1500);



    }, []);
    

    return (
        <>
            {/* <ItemCount initial={0} stock={9} /> */}

            {loader === false ? <ItemList products={products} /> : <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5" /></div>}


        </>
    )
}


export default ItemListContainer



