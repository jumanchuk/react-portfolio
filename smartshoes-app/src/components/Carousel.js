import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselBootstrap = () => {

return (
    
 <Carousel fade>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="./img/carousel/img-carousel-2.png"
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="./img/carousel/img-carousel-1.png"
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="./img/carousel/img-carousel-5.png"
        alt="Third slide"
        />

        {/*       <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>*/}
    </Carousel.Item>
 </Carousel>

)

}

export default CarouselBootstrap