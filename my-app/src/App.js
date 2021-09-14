import './App.css'
import './Sass/style.scss'
import ItemListContainer from './components/item-list/ItemListContainer'
import Navbar from './components/navbar/Navbar'

function App() {

  const welcome = "¡Bienvenidos!";

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={welcome} />
    </>
  );

}

export default App;
