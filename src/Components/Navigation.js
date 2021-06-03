import React from 'react';
import {Container, Navbar} from "react-bootstrap";

function Navigation(props) {

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"  className='mx-auto' style={{ fontFamily: 'Budmo Jiggler', fontSize: '4em', color: 'white'}}>
                    WERKOUT
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;
{/*<Navbar.Collapse id="basic-navbar-nav">*/}
{/*/!*<Nav className="mr-auto">*!/*/}
{/*/!*    <NavLink to="/equipment">equipment</NavLink>*!/*/}
{/*/!*    /!*<NavLink to="/category">category</NavLink>*!/*!/*/}
{/*/!*    <NavLink to="/workout">workout</NavLink>*!/*/}
{/*/!*</Nav>*!/*/}
{/*</Navbar.Collapse>*/}