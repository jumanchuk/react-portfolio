import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Container from 'react-bootstrap/Container';
import Carousel from './components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Carousel />
                    <Container fluid className="cards-container"> 
                    <ItemListContainer/>
                    </Container>
                </Route>
                <Route exact path="/category/:categoryId">
                    <Container fluid className="cards-container"> 
                    <ItemListContainer/>
                    </Container>
                </Route>
                <Route exact path="/Item/:ItemId">
                  <Container> 
                    <ItemDetailContainer/>
                  </Container>
                </Route>
                <Route exact path="/Home">
                  <Redirect path="/"/>
                </Route>
            </Switch>
        </BrowserRouter>
  );
}

export default App;