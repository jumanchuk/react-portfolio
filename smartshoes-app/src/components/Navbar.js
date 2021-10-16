import React from 'react';
import {CartWidget} from '../components/CartWidget';

export const Navbar = () => {

    return (

        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SmartShoes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Man</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Woman</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Childs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Sports</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Outlet</a>
                        </li>               
                    </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Navbar