import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {Card} from "react-bootstrap";
import axios from 'axios'

function HomeView({ quote, setQuote }) {

    useEffect(()=> {
        const qotd_url = 'https://type.fit/api/quotes'
        axios.get(qotd_url)
            .then(result => {
                let temp = result.data
                let rndQuote = (temp[Math.floor(Math.random()*temp.length)])
                setQuote(rndQuote)
                console.log(quote.text)
            })
    },[])

    return (

        <Card className="bg-dark text-light d-flex" fluid>
            <Card.Img src="https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Card image" />

            <Card.ImgOverlay className='d-flex' style={{ fontFamily: 'Budmo Jiggler', fontSize: '20px'}}>
                <NavLink to="/equipment" className='align-self-center mx-auto text-center border bg-dark p-3 text-decoration-none text-white'>
                <Card.Title className='pt-3' style={{fontSize:'40px'}}>Generate a 30-min workout here!</Card.Title>
                    <Card.Body className='text-warning'>{quote.text} <br/> - {quote.author}</Card.Body>
                </NavLink>
            </Card.ImgOverlay>
        </Card>

    );
}



export default HomeView;