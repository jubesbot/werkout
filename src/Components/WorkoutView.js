import React, {useEffect} from 'react';
import {Button, Col, Container, OverlayTrigger, Table, Tooltip} from "react-bootstrap";
import axios from "axios";

function WorkoutView({saveFinal, setSaveFinal, workout, setWorkout, setRefresh, refresh}) {

    useEffect(() => {

        const firstBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[2]}&language=2`)
        const secondBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[3]}&language=2`)
        const thirdBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[4]}&language=2`)

        const firstCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[2]}&language=2`)
        const secondCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[3]}&language=2`)
        const thirdCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[4]}&language=2`)

        axios.all([firstBodyweight, secondBodyweight, thirdBodyweight, firstCat, secondCat, thirdCat])
            .then(res => {
                let tempWorkout = [...res[0].data.results,
                    ...res[1].data.results,
                    ...res[2].data.results,
                    ...res[3].data.results,
                    ...res[4].data.results,
                    ...res[5].data.results]
                console.log(tempWorkout)

                let uniqueWorkout = tempWorkout.filter((ele, idx) => idx === tempWorkout.findIndex(elem => elem.id === ele.id && elem.id === ele.id))
                console.log(uniqueWorkout)
                let orderWorkout = []

                for (let i = 0; i < 6; i++) {
                    orderWorkout.push(...uniqueWorkout.splice((Math.floor(Math.random() * (uniqueWorkout.length))), 1))
                }
                console.log(orderWorkout)

                setWorkout(orderWorkout)

            })

    }, [setWorkout, setSaveFinal, refresh])

    function createMarkup(x) {
        return {__html: `${(workout && workout.length !== 0) ? workout[x].description : 'Loading...'}`}
    }

    function softRefresh() {
        setRefresh(prevState => !prevState)
        console.log(refresh)
    }

    return (
        <div className="container-fluid homepage-bg">
            <Col className='align-self-center'>
                <h1 className='text-center text-warning pb-3 pt-3'>Let's Get Moving!</h1>
                <Container>
                    <Table striped bordered variant="dark" size='sm' style={{fontSize: '1.5em'}}>
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
                        <tr className='text-warning'>
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 0, hide: 0}}
                                overlay={
                                    <Tooltip>
                                        <div dangerouslySetInnerHTML={createMarkup(0)}></div>
                                    </Tooltip>
                                }>
                                <td>{(workout && workout.length !== 0) ? workout[0].name : 'Loading...'}</td>
                            </OverlayTrigger>
                            <td>40s</td>
                            <td>20s</td>
                            <td rowSpan='3' className='text-center align-middle'>4</td>
                        </tr>
                        <tr className='text-warning'>
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 0, hide: 0}}
                                overlay={
                                    <Tooltip>
                                        <div dangerouslySetInnerHTML={createMarkup(1)}></div>
                                    </Tooltip>
                                }>
                                <td>{(workout && workout.length !== 0) ? workout[1].name : 'Loading...'}</td>
                            </OverlayTrigger>
                            <td>40s</td>
                            <td>20s</td>
                        </tr>
                        <tr className='text-warning'>
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 0, hide: 0}}
                                overlay={
                                    <Tooltip>
                                        <div dangerouslySetInnerHTML={createMarkup(2)}></div>
                                    </Tooltip>
                                }>
                                <td>{(workout && workout.length !== 0) ? workout[2].name : 'Loading...'}</td>
                            </OverlayTrigger>
                            <td>40s</td>
                            <td>20s</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className='text-center'>Water Break (1min)</td>
                        </tr>
                        <tr className='text-warning'>
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 0, hide: 0}}
                                overlay={
                                    <Tooltip>
                                        <div dangerouslySetInnerHTML={createMarkup(3)}></div>
                                    </Tooltip>
                                }>
                                <td>{(workout && workout.length !== 0) ? workout[3].name : 'Loading...'}</td>
                            </OverlayTrigger>
                            <td>40s</td>
                            <td>20s</td>
                            <td rowSpan='3' className='text-center align-middle'>4</td>
                        </tr>
                        <tr className='text-warning'>
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 0, hide: 0}}
                                overlay={
                                    <Tooltip>
                                        <div dangerouslySetInnerHTML={createMarkup(4)}></div>
                                    </Tooltip>
                                }>
                                <td>{(workout && workout.length !== 0) ? workout[4].name : 'Loading...'}</td>
                            </OverlayTrigger>
                            <td>40s</td>
                            <td>20s</td>
                        </tr>
                        <tr className='text-warning'>
                            <OverlayTrigger
                                placement="right"
                                delay={{show: 0, hide: 0}}
                                overlay={
                                    <Tooltip>
                                        <div dangerouslySetInnerHTML={createMarkup(5)}></div>
                                    </Tooltip>
                                }>
                                <td>{(workout && workout.length !== 0) ? workout[5].name : 'Loading...'}</td>
                            </OverlayTrigger>
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
                </Container>

                <div className='row justify-content-center text-decoration-none'>
                    <Button className='align-self-center' variant="danger" onClick={softRefresh}>Refresh
                        Exercises</Button>
                </div>
                <div className='row justify-content-center text-decoration-none pt-3'>
                    <iframe src="https://open.spotify.com/embed/playlist/6qgv7sIYQlJUFQg9aXjz8Q" mx="auto" height="82px"
                            frameBorder="0"
                            allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
            </Col>
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

// function findDuplicates(arr) {
//     const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
//     return [...new Set(filtered)]
// }
// let uniqueWorkout = findDuplicates(tempWorkout)

// function delDupes(data, key){
//     return [
//         ...new Map(
//             data.map(x => [key(x),x])
//         ).values()
//     ]
// }
// let uniqueWorkout = delDupes(tempWorkout, it => it.id)
// console.log(uniqueWorkout)

// const uniqueWorkout = tempWorkout.reduce((acc, current) => {
//     const x = acc.find(item => item.id === current.id);
//     if (!x) {
//         return acc.concat([current]);
//     } else {
//         return acc;
//     }
// }, []);
// console.log(uniqueWorkout)