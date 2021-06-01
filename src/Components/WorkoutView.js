import React, {useEffect, useState} from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import axios from "axios";

function WorkoutView({ saveFinal, workout, setWorkout,category, setSaveFinal }) {

    useEffect(()=>{

        const firstBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[2]}&language=2`)
        const secondBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[3]}&language=2`)
        const thirdBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[4]}&language=2`)

        const firstCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[2]}&language=2`)
        const secondCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[3]}&language=2`)
        const thirdCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[4]}&language=2`)

        axios.all([firstBodyweight, secondBodyweight, thirdBodyweight, firstCat, secondCat, thirdCat])
            .then(res=>{
                setWorkout(prevState => [
                    ...prevState,
                    ...res[0].data.results,
                    ...res[1].data.results,
                    ...res[2].data.results,
                    ...res[3].data.results,
                    ...res[4].data.results,
                    ...res[5].data.results
                ])
            })

    },[setWorkout,saveFinal])

    let uniqueWorkout = workout.filter( (ele, idx) => idx === workout.findIndex( elem => elem.id === ele.id && elem.id === ele.id))

    function refresh(){
        setSaveFinal(prevState => [...prevState])
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(saveFinal)
    console.log(category)

    return (
        <div>
            <h1 className='text-center'>30min Workout</h1>
            <Table striped bordered variant="dark">
                <thead>
                <tr className='text-center'>
                    <th>Activity</th>
                    <th>Work</th>
                    <th>Rest</th>
                    <th>Sets</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={4} className='text-center'>Warm Up (5min)</td>
                </tr>
                <tr>
                    <td className='font-weight-bold' onMouseOver={handleShow}>{(uniqueWorkout && uniqueWorkout.length !== 0) ? uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].name : 'Loading...'}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].description}</Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </td>
                    <td>40s</td>
                    <td>20s</td>
                    <td rowSpan='3' className='text-center align-middle'>3</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>{(uniqueWorkout && uniqueWorkout.length !== 0) ? uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].name : 'Loading...'}</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>{(uniqueWorkout && uniqueWorkout.length !== 0) ? uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].name : 'Loading...'}</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td colSpan={4} className='text-center'>Water Break (1min)</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>{(uniqueWorkout && uniqueWorkout.length !== 0) ? uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].name : 'Loading...'}</td>
                    <td>40s</td>
                    <td>20s</td>
                    <td rowSpan='3' className='text-center align-middle'>3</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>{(uniqueWorkout && uniqueWorkout.length !== 0) ? uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].name : 'Loading...'}</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>{(uniqueWorkout && uniqueWorkout.length !== 0) ? uniqueWorkout[Math.floor(Math.random()*(uniqueWorkout.length))].name : 'Loading...'}</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td colSpan={4} className='text-center'>Water Break (1min)</td>
                </tr>
                <tr>
                    <td colSpan={4} className='text-center'>Cool Down (5min)</td>
                </tr>
                </tbody>
            </Table>
            <Button variant="dark" onClick={refresh}>Refresh Exercises</Button>

        </div>
    );
}

export default WorkoutView;

// if (uniqueWorkout.length !== 0){
//     let rnd = Math.floor(Math.random()*(uniqueWorkout.length)+1)
//     console.log(rnd)
// }

// let rnd = Math.floor(Math.random()*(uniqueWorkout.length)+1)


// console.log(Math.floor(Math.random()*(uniqueWorkout.length)+1))
// console.log(uniqueWorkout[4].name)
