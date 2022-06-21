import React from "react"


const ItemListContainer = () => {
    return (
        <>
            <ul style={Styles.ul}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </>
    )
}


export default ItemListContainer

const Styles = {
    ul: {
        display: "flex",
        justifyContent: "space-between",
        margin: 40,
        listStyleType: "none",

    },
}