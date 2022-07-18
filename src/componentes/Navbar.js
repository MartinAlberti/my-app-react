import React from "react"
import Logo from "../imagenes/logo.png"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"



const Navbar = () => {

    const categories = [
        { name: "electronics", id: 0, route: "/category/electronics" },
        { name: "jewelery", id: 1, route: "/category/jewelery" },
        { name: "men's clothing", id: 2, route: "/category/men's clothing" },
        { name: "women's clothing", id: 3, route: "/category/women's clothing" },
    ];


    return (
        <header style={Styles.container} >
            <Link to="/"> <img style={Styles.imagen} src={Logo} alt="logo" /></Link>

            <h1 className="text-4xl ">Tienda</h1>
            <nav style={Styles.navBarStyle}>
            {categories.map((category) => <NavLink key={category.id} style={Styles.anchors} to={category.route}>{category.name}</NavLink>)}
            </nav>
            <Link to="/cart" > < CartWidget /></Link>

        </header>

    )
}
export default Navbar


const Styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "5%",
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#00ADB5",


    },
    imagen: {
        width: "15%",
        paddingLeft: "2%",
    },
    navBarStyle: {
        display: "flex",
        justifyContent: "space-between",

    },
    anchors: {

        margin: 20,
        marginLeft:40,
        marginRight: 40,
        textDecoration: "none",
        fontSize: "1.5rem",
        color: "black",
    },

}

