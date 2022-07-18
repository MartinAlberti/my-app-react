import './App.css';
import Navbar from '../src/componentes/Navbar';
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './componentes/Cart';
import Envios from './componentes/Envios';
import Contacto from './componentes/Contacto';
import CartCustomProvider from "./context/CartContext"





const App = () => {

  return (
    <BrowserRouter>
      <CartCustomProvider >
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/envios' element={<Envios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </CartCustomProvider>

    </BrowserRouter >
  );
}
export default App


