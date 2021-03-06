import React, {useEffect} from 'react';
import {Button, Card, CardDeck, Col} from "react-bootstrap";
import axios from "axios";
import {NavLink} from "react-router-dom";

function CategoryView({equipment, category, setCategory, saveFinal, setSaveFinal}) {

    useEffect(() => {
        axios.get('https://wger.de/api/v2/exercisecategory?limit=1000')
            .then(res => {
                let tempCat = res.data.results.map((part) => {
                    return ({...part, image: require(`../img/${part.name}.jpg`).default})
                })
                setCategory(tempCat)
            })
    }, [setCategory])

    function selectCategory(e, id) {
        e.stopPropagation()
        console.log(e.target)
        // console.log(name)
        let temp = [...saveFinal]
        let foundIndex = temp.indexOf(id)
        // console.log("found index",foundIndex)
        if (temp.length < 3 && foundIndex > 0) {
            temp.splice(foundIndex, 1)

        }
        if (foundIndex > -1) {
            temp.splice(foundIndex, 1)
            e.target.classList.remove("btn-info")
        } else if (foundIndex < 0 && temp.length < 3) {
            temp.push(id)
            e.target.classList.add("btn-info")
        }
        setSaveFinal(temp)
    }

    function goToWorkout() {
        setSaveFinal(prevState => [...equipment, ...prevState])
    }

    console.log(category)
    console.log(equipment)
    console.log(saveFinal)

    return (
        <div className="container-fluid homepage-bg">
            <h1 className='text-center text-warning pt-2 pb-1'>What do you want to work on? (Pick 3)</h1>

            <CardDeck>
                {category.map(part => (
                    <Col key={part.id} md={3} className="p-1 mx-auto">
                        <Card className="bg-warning text-white">
                            <Card.Img src={part.image} alt="Card image"/>
                            <Button variant="none"
                                    style={{fontSize: '1.5em'}}
                                    onClick={(e) => selectCategory(e, part.id)}>{part.name}</Button>
                        </Card>
                    </Col>
                ))}
            </CardDeck>

            <br/>

            <NavLink to='/workout' onClick={goToWorkout} className='row justify-content-center text-decoration-none'>
                <Button variant="danger" disabled={saveFinal.length < 3}>Generate Workout</Button>
            </NavLink>

        </div>
    );
}

export default CategoryView;

// ['arms', 'shoulders']
// console.log((e.target.className))
// let selectedCat = (e.target.className).slice(0, -14)
// if (!saveCategory.includes(selectedCat) && saveCategory.length < 2) {
//     setSaveCategory(prevState => [...prevState, selectedCat])
// } else if (saveCategory.includes(selectedCat)) {
//     setSaveCategory(prevState => {
//         console.log(prevState)
//         prevState.splice(selectedCat, 1)
//         console.log(prevState)
//         return [...prevState]
//     })
// }

// <CardDeck>
//     {category.map(part => (
//        <Card key={part.id}>
//             <Card.Img variant="top" src={part.image} />
//             <Card.Body>
//                 <Card.Title onClick={(e) => selectCategory(e, part.id)}>
//                     {part.name}
//                 </Card.Title>
//             </Card.Body>
//         </Card>
//     ))}
// </CardDeck>
