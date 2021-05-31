import React, {useEffect} from 'react';
import {Button, Card, CardDeck} from "react-bootstrap";
import axios from "axios";
import images from "./Images";
import {NavLink} from "react-router-dom";

function CategoryView({ equipment, category, setCategory, saveFinal, setSaveFinal}) {

    useEffect(()=>{
        axios.get('https://wger.de/api/v2/exercisecategory?limit=1000')
            .then(res=>{
                setCategory(res.data.results)
            })
    },[setCategory])

    function selectCategory(e, name) {
        e.stopPropagation()
        // console.log(name)
        let temp = [...saveFinal]
        let foundIndex = temp.indexOf(name)
        // console.log("found index",foundIndex)
        if(temp.length === 2 && foundIndex > 0) {
            temp.splice(foundIndex, 1)
        }if (foundIndex > -1) {
            temp.splice(foundIndex, 1)
        } else if (foundIndex < 0 && temp.length < 2){
            temp.push(name)
        }
        setSaveFinal(temp)

    }

    function goToWorkout(){
        setSaveFinal(prevState => [...equipment,...prevState])
    }

    // console.log(category)
    console.log(equipment)
    console.log(saveFinal)

    return (
        <div>

            <h1>WHAT PART OF THE BODY? (Pick 2)</h1>

            <CardDeck>
                {category.map(part => (
                <Card key={part.id}>
                    <Card.Img variant="top" src=''/>
                    <Card.Body>
                        <Card.Title onClick={(e) => selectCategory(e, part.name)} className={part.name}>
                            {part.name}
                        </Card.Title>
                    </Card.Body>
                </Card>
                ))}
            </CardDeck>

            <hr/>
            <NavLink to='/workout' onClick={goToWorkout}>
                <Button variant="primary" name='toWorkout'>Go somewhere</Button>
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