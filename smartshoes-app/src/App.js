import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterBootstrap from './components/footer/Footer';
import {CartFunction} from './context/CartConext';
import Cart from './components/cart/Cart';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemListPromoContainer from './components/Items/ItemListPromoContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Container from 'react-bootstrap/Container';
import Carousel from './components/carousel/Carousel';
import CheckOut from './components/cart/CheckOut/CheckOut';
import PlaceOrder from './components/cart/PlaceOrder/PlaceOrder';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    
        <BrowserRouter>
        <CartFunction>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Carousel />
                    <Container className="cards-container"> 
                    <ItemListPromoContainer/>
                    </Container>
                    <FooterBootstrap />
                </Route>
                <Route exact path="/AllProducts">
                    <Carousel />
                    <Container className="cards-container"> 
                    <ItemListContainer/>
                    </Container>
                    <FooterBootstrap />
                </Route>
                <Route exact path="/category/:categoryId">
                    <Container className="cards-container"> 
                    <ItemListContainer/>
                    </Container>
                    <FooterBootstrap />
                </Route>
                <Route exact path="/Item/:ItemId">
                  <Container> 
                    <ItemDetailContainer/>
                  </Container>
                  <FooterBootstrap />
                </Route>
                <Route exact path="/Home">
                  <Redirect path="/"/>
                </Route>
                <Route exact path="/Cart">
                  <Cart/>
                </Route>
                <Route exact path="/CheckOut">
                  <CheckOut/>
                </Route>
                <Route exact path="/PlaceOrder">
                  <PlaceOrder/>
                </Route>
            </Switch>
            </CartFunction>
        </BrowserRouter>
  );
}

export default App;