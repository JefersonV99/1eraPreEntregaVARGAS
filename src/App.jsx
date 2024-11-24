import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ItemListContainer from './components/ItemListContainer';
import NavbarReactBootstrap from './components/NavBarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

    <NavbarReactBootstrap/>
    <Routes>
      <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a Coffe Cap' />}/>
      <Route path='/products/:category' element={<ItemListContainer greeting='Bienveenidos'/>} />
      <Route path='/item:/id' element={<ItemDetailContainer/>}/>
    </Routes>

  </BrowserRouter>

  )
}

export default App
