import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {Card} from "react-bootstrap";
import axios from 'axios'

function HomeView({quote, setQuote}) {

    useEffect(() => {
        const qotd_url = 'https://type.fit/api/quotes'
        axios.get(qotd_url)
            .then(result => {
                let temp = result.data
                let rndQuote = (temp[Math.floor(Math.random() * temp.length)])
                setQuote(rndQuote)
                console.log(quote.text)
            })
    }, [])

    return (
        <div>
            <Card className="bg-dark text-light d-flex" fluid>
                <div className="container-fluid homepage-bg"/>
                <Card.ImgOverlay className='d-flex' style={{fontFamily: 'Budmo Jiggler', fontSize: '2em'}}>
                    <NavLink to="/equipment"
                             className='align-self-center text-center border bg-dark mx-auto text-decoration-none text-white p-3'>
                        <Card.Title className='p-3' style={{fontSize: '40px'}}>Generate a 35-min workout
                            here!</Card.Title>
                        <Card.Body className='text-warning'>{quote.text}
                            <footer
                                className="blockquote-footer text-danger">{quote.author ? quote.author : 'Someone Famous'}</footer>
                            <br/>
                            <p className='pb-0 text-info' style={{fontSize: '15px'}}>GENERAL ASSEMBLY PROJECT #2 - REACT APPLICATION</p>
                        </Card.Body>
                    </NavLink>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}


export default HomeView;