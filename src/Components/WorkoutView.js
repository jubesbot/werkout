import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";

function WorkoutView({ saveFinal, workout, setWorkout,category }) {

    console.log(saveFinal)

    useEffect(()=>{

        const firstBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[2]}&language=2`)
        const secondBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[3]}&language=2`)
        const thirdBodyweight = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[0]}&category=${saveFinal[4]}&language=2`)

        const firstCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[2]}&language=2`)
        const secondCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[3]}&language=2`)
        const thirdCat = axios.get(`https://wger.de/api/v2/exercise/?equipment=${saveFinal[1]}&category=${saveFinal[4]}&language=2`)

        axios.all([firstBodyweight, secondBodyweight, thirdBodyweight, firstCat, secondCat, thirdCat])
            .then(res=>{
                setWorkout(prevState => [...prevState, ...res[0].data.results, ...res[1].data.results, ...res[2].data.results, ...res[3].data.results, ...res[4].data.results, ...res[5].data.results])
            })
    },[])

    let uniqueWorkout = workout.filter( (ele, index) => index === workout.findIndex( elem => elem.id === ele.id && elem.id === ele.id))

    console.log(uniqueWorkout)
    // console.log(Math.floor(Math.random()*(uniqueWorkout.length)+1))
    // console.log(uniqueWorkout[4].name)

    return (
        <div>
            <h1>30min Workout.</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Activity</th>
                    <th>Work</th>
                    <th>Rest</th>
                    <th>Sets</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Warm Up</td>
                    <td>5min</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                {/*<tr>*/}
                {/*    <td>{uniqueWorkout[Math.floor(Math.random()*uniqueWorkout.length)].name}</td>*/}
                {/*    <td>40s</td>*/}
                {/*    <td>20s</td>*/}
                {/*    <td rowSpan='3'>3</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>{uniqueWorkout[Math.floor(Math.random()*uniqueWorkout.length)].name}</td>*/}
                {/*    <td>40s</td>*/}
                {/*    <td>20s</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>{uniqueWorkout[Math.floor(Math.random()*uniqueWorkout.length)].name}</td>*/}
                {/*    <td>40s</td>*/}
                {/*    <td>20s</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>Water Break</td>*/}
                {/*    <td>-</td>*/}
                {/*    <td>1min</td>*/}
                {/*    <td>-</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>{uniqueWorkout[Math.floor(Math.random()*uniqueWorkout.length)].name}</td>*/}
                {/*    <td>40s</td>*/}
                {/*    <td>20s</td>*/}
                {/*    <td rowSpan='3'>3</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>{uniqueWorkout[Math.floor(Math.random()*uniqueWorkout.length)].name}</td>*/}
                {/*    <td>40s</td>*/}
                {/*    <td>20s</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>{uniqueWorkout[Math.floor(Math.random()*uniqueWorkout.length)].name}</td>*/}
                {/*    <td>40s</td>*/}
                {/*    <td>20s</td>*/}
                {/*</tr>*/}
                <tr>
                    <td>Water Break</td>
                    <td>-</td>
                    <td>1min</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Cool Down</td>
                    <td>5min</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                </tbody>
            </Table>

        </div>
    );
}

export default WorkoutView;