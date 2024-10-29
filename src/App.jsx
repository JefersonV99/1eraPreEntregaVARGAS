import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'
function App() {

  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenidos a Coffe Cap' texto='otra Prop'/>
    </div>
  )
}

export default App
