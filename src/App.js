import './App.css';
import Navbar from '../src/componentes/Navbar';
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './componentes/Cart';
import Envios from './componentes/Envios';
import Contacto from './componentes/Contacto';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/productos' element={<ItemListContainer />}/>
        <Route path='/envios' element={<Envios />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/item:id' element= {<ItemDetailContainer />} />     
      </Routes>



      {/* <ItemListContainer name="item" />
      <ItemDetailContainer /> */}
    </BrowserRouter>
  );
}
export default App


