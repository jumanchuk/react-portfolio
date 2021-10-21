import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import 'font-awesome/css/font-awesome.min.css';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/Container'

const Home = () => {

    return(
        <>
            <Navbar />
            <Carousel />
            <Container fluid className="cards-container"> 
            <ItemListContainer/>
            </Container>
        </>
    )
}

export default Home
