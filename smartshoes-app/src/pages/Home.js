import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import 'font-awesome/css/font-awesome.min.css';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {

    return(
        <>
            <Navbar />
            <Carousel />
            <ItemListContainer greeting="Think smart, look amazing." />
        </>
    )
}

export default Home