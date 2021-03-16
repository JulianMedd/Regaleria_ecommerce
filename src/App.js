import NavBar from "./Components/NavBar";
import './App.css';
import ItemListContainer from "./Containers/ItemsListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
