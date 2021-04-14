import NavBar from "./Components/NavBar";
import './App.css';
import ItemListContainer from "./Containers/ItemsListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { CartProvider } from "./Context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer/>
              </Route>
              <Route path='/category/:categoryId'>
                <ItemListContainer/>
              </Route>
              <Route path='/item/:itemId'>
                <ItemDetailContainer/>
              </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
