import { React, useEffect, useState } from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {



    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)



    const { categoryId } = useParams();

    useEffect(() => {
        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products';
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [categoryId]);


    return (
        <>
            {loader ?   <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5" /></div> : <ItemList products={products} />}
        </>
    )
}


export default ItemListContainer



