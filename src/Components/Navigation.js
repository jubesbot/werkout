import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/home">WERKOUT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}

export default Navigation;