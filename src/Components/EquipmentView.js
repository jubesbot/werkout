import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function EquipmentView({equipment, setEquipment}) {
    function selectEquipment(e) {
        e.stopPropagation()
        if(equipment.length<1)
        setEquipment(prevState => [...prevState, (e.target.name)])
    }
    console.log(equipment)

    return (
        <div>
            <h1>WHAT EQUIPMENT ARE YOU USING?</h1>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
                        <Card.Body>
                            <Card.Title>Body Weight</Card.Title>
                            <Card.Text>
                                Your workout will consist of body weight exercises only.
                            </Card.Text>
                            <NavLink to='/category' onClick={selectEquipment}>
                                <Button variant="primary" name='bodyweight'>Go somewhere</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80"/>
                        <Card.Body>
                            <Card.Title>Dumbbells</Card.Title>
                            <Card.Text>
                                Your workout will consist of body weight and dumbbell exercises.
                            </Card.Text>
                            <NavLink to='/category' onClick={selectEquipment}>
                                <Button variant="primary" name='dumbbells'>Go somewhere</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            {/*<CardDeck >*/}
            {/*    <Card>*/}
            {/*        /!*<NavLink to ='/category' className='text-decoration-none'>*!/*/}
            {/*            <Card.Img onClick={selectEquipment} className='Bodyweight' variant="top" src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'/>*/}
            {/*        /!*</NavLink>*!/*/}
            {/*            <Card.Body>*/}
            {/*                <Card.Title>*/}
            {/*                    Body Weight*/}
            {/*                </Card.Title>*/}
            {/*                <Card.Text>*/}
            {/*                    Your workout will consist of body weight exercises only*/}
            {/*                </Card.Text>*/}
            {/*            </Card.Body>*/}
            {/*    </Card>*/}

            {/*    <Card>*/}
            {/*            <Card.Img onClick={selectEquipment} className='Dumbbells' variant="top" src='https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80' /><Card.Body>*/}
            {/*            <Card.Title>*/}
            {/*                Dumbbells*/}
            {/*            </Card.Title>*/}
            {/*            <Card.Text>*/}
            {/*                Your workout will consist of body weight and dumbbell exercises*/}
            {/*            </Card.Text>*/}
            {/*        </Card.Body>*/}
            {/*        /!*</NavLink>*!/*/}
            {/*    </Card>*/}
            {/*</CardDeck>*/}
        </div>
    );
}

export default EquipmentView;