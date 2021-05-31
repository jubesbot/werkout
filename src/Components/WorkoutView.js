import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";

function WorkoutView({ saveFinal, workout, setWorkout }) {

    console.log(saveFinal)

    // useEffect(()=>{
    //     axios.get('https://wger.de/api/v2/exerciseinfo/?limit=1000&language=2')
    //         .then(res=>{
    //             setWorkout(res.data.results)
    //         })
    // },[setWorkout])

    // let temp = [...workout]
    // let foundIndex = temp.indexOf(saveFinal)



    console.log(workout)

    return (
        <div>
            <h1>30min xxx and yyy workout with zzz.</h1>
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
                <tr>
                    <td>xxx</td>
                    <td>40s</td>
                    <td>20s</td>
                    <td rowSpan='3'>3</td>
                </tr>
                <tr>
                    <td>yyy</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td>xxx</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td>Water Break</td>
                    <td>-</td>
                    <td>1min</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>yyy</td>
                    <td>40s</td>
                    <td>20s</td>
                    <td rowSpan='3'>3</td>
                </tr>
                <tr>
                    <td>xxx</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
                <tr>
                    <td>yyy</td>
                    <td>40s</td>
                    <td>20s</td>
                </tr>
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