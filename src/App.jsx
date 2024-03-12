import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </>
  )
}

export default App
