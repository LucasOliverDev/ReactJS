import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Acá está el ItemListContainer" />
    </div>
  );
}

export default App;
