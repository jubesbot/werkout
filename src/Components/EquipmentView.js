import React from 'react';
import { Card, CardDeck} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function EquipmentView({ equipment, setEquipment } ) {

    return (
        <div>
            <h1>WHAT EQUIPMENT ARE YOU USING?</h1>
                <CardDeck>
                    <Card>
                        {/*<NavLink to ='/category' className='text-decoration-none'>*/}
                            <Card.Img variant="top" src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'/>
                        {/*</NavLink>*/}
                            <Card.Body>
                                <Card.Title>
                                    Body Weight
                                </Card.Title>
                                <Card.Text>
                                    Your workout will consist of body weight exercises only
                                </Card.Text>
                            </Card.Body>
                    </Card>

                    <Card>
                            <Card.Img variant="top" src='https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80' /><Card.Body>
                            <Card.Title>
                                Dumbbells
                            </Card.Title>
                            <Card.Text>
                                Your workout will consist of body weight and dumbbell exercises
                            </Card.Text>
                        </Card.Body>
                        {/*</NavLink>*/}
                    </Card>
                </CardDeck>
        </div>
    );
}

export default EquipmentView;