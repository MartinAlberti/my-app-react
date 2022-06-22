import './App.css';
import Navbar from '../src/componentes/Navbar';
import ItemListContainer from "./componentes/ItemListContainer"
const App = () => {
  return (
    <>
      <Navbar />,
      <ItemListContainer name= "item"/>
    </>
  );
}
export default App


