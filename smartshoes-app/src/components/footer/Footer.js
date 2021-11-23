import React from 'react';
import { BsFacebook,BsTwitter,BsGoogle,BsInstagram,BsFillTelephoneFill,BsMailbox2,BsMapFill,BsGem} from 'react-icons/bs';

export const FooterBootstrap = () => {

    return (

        <>

<footer className="text-center text-lg-start bg-light text-muted mt-5">
  <section  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"  >
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="/Home" className="me-4 text-reset">
        <BsFacebook size={'35px'} />
      </a>
      <a href="/Home" className="me-4 text-reset">
        <BsTwitter size={'35px'} />      
      </a>
      <a href="/Home" className="me-4 text-reset">
        <BsGoogle size={'35px'} />      
      </a>
      <a href="/Home" className="me-4 text-reset">
        <BsInstagram size={'35px'} />      
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <BsGem size={'15px'} /> Smart Shoes
          </h6>
          <p>
            We are International company specialized in selling Sports Shoes.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Categories
          </h6>
          <p>
            <a href="/category/1" className="text-reset">Man</a>
          </p>
          <p>
            <a href="/category/2" className="text-reset">Woman</a>
          </p>
          <p>
            <a href="/category/3" className="text-reset">Kids</a>
          </p>
          <p>
            <a href="/category/4" className="text-reset">Outlet</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/Home" className="text-reset">Work Whith Us</a>
          </p>
          <p>
            <a href="/Home" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="/Home" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="/Home" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><BsMapFill size={'15px'} /> Buenos Aires, Almagro 1198, AR</p>
          <p>
            <BsMailbox2 size={'15px'} /> {' '} 
            info@smartshoes.com
          </p>
          <p><BsFillTelephoneFill size={'15px'} /> +54 11 2398 1217</p>
          <p><BsFillTelephoneFill size={'15px'} /> +54 11 2398 1712</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} >
    © 2021 Copyright: {' '} 
    <a className="text-reset fw-bold" href="https://smartshoes.com/">smartshoes.com</a>
  </div>
</footer>
</>
)

}

export default FooterBootstrap