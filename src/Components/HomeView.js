import React from 'react';
import {NavLink} from "react-router-dom";
import {Card} from "react-bootstrap";

function HomeView(props) {
    return (
        // <div className='text-center'>
        //     <Image fluid src='https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'/>
        //     Running out of workout ideas? Fret not.<br/>Generate a 30-min workout <NavLink to="/equipment">here</NavLink>!
        // </div>

        <Card className="bg-dark text-light">
            <Card.Img src="https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Card image" />

            <Card.ImgOverlay className='d-flex'>
                <NavLink to="/equipment" className='align-self-center mx-auto text-center border bg-dark p-3 text-decoration-none text-white'>
                <Card.Title >Running out of workout ideas?<br/>No worries.<br/>Generate a 30-min workout here!</Card.Title>
                </NavLink>
            </Card.ImgOverlay>
        </Card>

    );
}



export default HomeView;