import React from "react"
import Logo from "../imagenes/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
    return (
        <header style={Styles.container} >
            <img style={Styles.imagen} src={Logo} alt="logo" />
            <h1>Instrumentos Musicales</h1>
            <nav style={Styles.navBarStyle}>
                <a style={Styles.anchors} href="" >Productos </a>
                <a style={Styles.anchors} href="" >Envíos </a>
                <a style={Styles.anchors} href="" >Contacto </a>
            </nav>
            <ShoppingCartIcon sx={{ fontSize: 30 }} />

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
        width: "5%",
        paddingLeft: "2%",
    },
    navBarStyle: {
        display: "flex",
        justifyContent: "space-between",

    },
    anchors: {
        
        margin: 20,
        textDecoration: "none",
        fontSize: "1.5rem",
        color: "black",
    }

}

