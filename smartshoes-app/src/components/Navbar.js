import React from 'react';
import {CartWidget} from '../components/CartWidget';
import  Nav from 'react-bootstrap/esm/Nav';
import  Navbar  from 'react-bootstrap/esm/Navbar';
import  NavDropdown  from 'react-bootstrap/esm/NavDropdown';

export const NavbarBootstrap = () => {

    return (

            <>

            <Navbar bg="light" expand="lg">

            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginLeft: "20px" }}/>
            <Navbar.Collapse id="navbarScroll" style={{ marginLeft: "20px" }}>
                <Nav 
                className="mr-auto my-2 my-lg-0"
                
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Man</Nav.Link>
                <Nav.Link href="#action3">Woman</Nav.Link>
                <Nav.Link href="#action4">Childrens</Nav.Link>
                <NavDropdown title="Sports" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action5">Running</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Gym</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action7">Outlet</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget className="justify-content-end" />
            </Navbar>
            </>
    )

}

export default NavbarBootstrap