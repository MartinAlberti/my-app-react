import React from "react"


const ItemListContainer = (props) => {
    const { name } = props;
    return (
        <>
            <ul style={Styles.ul}>
                <li>{name} 1</li>
                <li>{name} 2</li>
                <li>{name} 3</li>
                <li>{name} 4</li>
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