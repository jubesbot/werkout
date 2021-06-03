import React from 'react';
import {Button, Card, CardDeck, CardGroup, Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function EquipmentView({equipment, setEquipment}) {
    function selectEquipment(e) {
        e.stopPropagation()
        if (equipment.length < 1)
            setEquipment(prevState => [...prevState, 7, Number(e.target.value)])
    }

    console.log(equipment)

    return (
        <div className="container-fluid homepage-bg">
            <Col className='align-self-center'>
                <h1 className='text-center text-warning pt-3 pb-1'>WHAT EQUIPMENT ARE YOU USING?</h1>
                <Row>
                    <CardDeck className='mx-auto justify-content-center'>
                        <Col md={5}>
                            <Card className="bg-warning">
                                <Card.Img variant="top"
                                          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
                                <Card.Body className='text-center'>
                                    <Card.Title style={{fontSize: '2em'}}>Body Weight</Card.Title>
                                    <Card.Text style={{fontSize: '1.5em'}}>
                                        Contains a series of <u>body weight</u> exercises only.
                                    </Card.Text>
                                    <NavLink to='/category' onClick={selectEquipment}
                                             className='row justify-content-center text-decoration-none'>
                                        <Button variant="danger" text-dark value={7}>Let's go!</Button>
                                    </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={5}>
                            <Card className="bg-warning">
                                <Card.Img variant="top"
                                          src="https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80"/>
                                <Card.Body className='text-center'>
                                    <Card.Title style={{fontSize: '2em'}}>Dumbbells / Filled water bottles</Card.Title>
                                    <Card.Text style={{fontSize: '1.5em'}}>
                                        Contains a series of <u>body weight and dumbbell</u> exercises.
                                    </Card.Text>
                                    <NavLink to='/category' onClick={selectEquipment}
                                             className='row justify-content-center text-decoration-none'>
                                        <Button variant="danger" value={3}>Try me!</Button>
                                    </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    </CardDeck>
                </Row>
            </Col>
        </div>
    );
}

export default EquipmentView;