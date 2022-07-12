import React from "react"
import Logo from "../imagenes/logo.png"
import CartWidget from "./CartWidget"
import { Link,NavLink } from "react-router-dom"



const Navbar = () => {

 

    return (
        <header style={Styles.container} >
            <Link to="/"> <img style={Styles.imagen} src={Logo} alt="logo" /></Link>

            <h1 className="text-4xl ">Instrumentos Musicales</h1>
            <nav style={Styles.navBarStyle}>
                <Link style={Styles.anchors} to="/productos" >Productos </Link>
                <Link style={Styles.anchors} to="/envios" >Envíos </Link>
                <Link style={Styles.anchors} to="/contacto" >Contacto </Link>
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

