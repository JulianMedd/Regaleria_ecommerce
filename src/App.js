import NavBar from "./Components/NavBar";
import './App.css';
import ItemListContainer from "./Containers/ItemsListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer/>
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
