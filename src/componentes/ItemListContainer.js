import { React, useEffect, useState } from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ScaleLoader from "react-spinners/ScaleLoader";


const initialProducts = [
    { id: 1, title: "Gibson Les Paul standard", description: " asd ", price: 220000, pictureUrl: "https://www.malaga8.com/img/cms/gibson-les-paul-standard-50s-hcs-p-32553.jpg" },
    // { id: 2, title: "Les Paul Modern ", description: "  asd", price: 244000, pictureUrl: "data:image/jpeg;base64,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" }


]

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(initialProducts)

    }, 3000);
})


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {

        promesa.then((data) => {
            setProducts(data)
            setLoader(false)
        }).catch(() => {
            console.log("error")
        })
    }
    )


    return (
        <>
            {/* <ItemCount initial={0} stock={9} /> */}

            {loader === false ? <ItemList products={products} /> : <div className="flex justify-center mt-60  "> <ScaleLoader color="#00ADB5"/></div>}



        </>
    )
}


export default ItemListContainer



