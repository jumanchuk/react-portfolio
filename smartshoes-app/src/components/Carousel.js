import React from 'react';

export const Carousel = () => {

return (
    
<div id="carouselControls" className="carousel slide" data-ride="carousel">

  <div className="carousel-inner" role="listbox" aria-label="carousel">
        <div className="carousel-item active">
            <div className="img" ><img className="d-block img-fluid" src="./img/carousel/img-carousel-2.png" alt="First slide"/></div>
        </div>
        <div className="carousel-item">
            <div className="img"><img className="d-block img-fluid" src="./img/carousel/img-carousel-2.png" alt="Second slide"/></div>
        </div>
        <div className="carousel-item">
            <div className="img"><img className="d-block img-fluid" src="./img/carousel/img-carousel-1.png" alt="Third slide"/></div>
        </div>
  </div>

  <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
  </a>

  <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
  </a>

</div>

)

}

export default Carousel