import React from 'react';
import {CartWidget} from '../CartWidget/CartWidget';
import  Nav from 'react-bootstrap/esm/Nav';
import  Navbar  from 'react-bootstrap/esm/Navbar';
import  NavDropdown  from 'react-bootstrap/esm/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';


export const NavbarBootstrap = () => {

    return (

            <>
            <CartWidget/>
            <Navbar bg="light" expand="lg">

            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginLeft: "20px" }}/>
            <Navbar.Collapse id="navbarScroll" style={{ marginLeft: "20px" }}>
                <Nav 
                className="mr-auto my-2 my-lg-0"
                
                navbarScroll
                >


                <LinkContainer to="/">
                <Nav.Link>
                <img width="70px" height="auto" className="img-responsive" src="/img/logo192.png"  alt="logo" />         
                </Nav.Link> 
                </LinkContainer>
                <LinkContainer to="/Home">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/category/1">
                <Nav.Link>Man</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/category/2">
                <Nav.Link>Woman</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/category/3">
                <Nav.Link>Kids</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Sports" id="navbarScrollingDropdown">
                    <LinkContainer to="/category/4">
                    <NavDropdown.Item>Running</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/category/5">
                    <NavDropdown.Item>Gym</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/category/6">
                <Nav.Link>Outlet</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
            </>
    )

}

export default NavbarBootstrap