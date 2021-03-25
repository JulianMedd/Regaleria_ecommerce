import NavBar from "./Components/NavBar";
import './App.css';
import ItemListContainer from "./Containers/ItemsListContainer";
import ItemCount from "./Components/ItemCount";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
