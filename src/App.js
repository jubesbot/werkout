import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import {Container} from "react-bootstrap";
import HomeView from "./Components/HomeView";
import EquipmentView from "./Components/EquipmentView";
import CategoryView from "./Components/CategoryView";
import WorkoutView from "./Components/WorkoutView";
import Navigation from "./Components/Navigation";
import axios from 'axios';

function App() {

    const [equipment, setEquipment] = useState(['bodyweight','dumbbells'])
    const [category, setCategory] = useState([])

        return (
       <BrowserRouter>
           <Navigation />
           <Container className="mt-4">

               <Switch>
                   <Route path="/home" exact>
                       <HomeView />
                   </Route>
                   <Route path="/equipment" >
                       <EquipmentView equipment={equipment} setEquipment={setEquipment}/>
                   </Route>
                   <Route path="/category" >
                       <CategoryView />
                   </Route>
                   <Route path="/category/workout" >
                       <WorkoutView />
                   </Route>
               </Switch>

           </Container>
       </BrowserRouter>
    );
}

export default App;
