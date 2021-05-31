import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/home">WERKOUT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/equipment">equipment</NavLink>
                    {/*<NavLink to="/category">category</NavLink>*/}
                    <NavLink to="/workout">workout</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;