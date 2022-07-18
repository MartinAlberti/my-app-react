import './App.css';
import Navbar from '../src/componentes/Navbar';
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './componentes/Cart';
import CartCustomProvider from "./context/CartContext"





const App = () => {

  return (
    <BrowserRouter>
      <CartCustomProvider >
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido' />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>

    </BrowserRouter >
  );
}
export default App


