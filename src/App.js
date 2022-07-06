import './App.css';
import Navbar from '../src/componentes/Navbar';
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer';
const App = () => {
  return (
    <>
      <Navbar />,
      <ItemListContainer name= "item"/>
      <ItemDetailContainer />
    </>
  );
}
export default App


