import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import {Container} from "react-bootstrap";
import HomeView from "./Components/HomeView";
import EquipmentView from "./Components/EquipmentView";
import CategoryView from "./Components/CategoryView";
import WorkoutView from "./Components/WorkoutView";
import Navigation from "./Components/Navigation";

function App() {

    const [quote, setQuote] = useState('')
    const [equipment, setEquipment] = useState([])
    const [category, setCategory] = useState([])
    const [workout, setWorkout] = useState([])
    const [saveFinal, setSaveFinal] = useState([])
    const [refresh, setRefresh] = useState(true)

        return (
       <BrowserRouter>
           <Navigation />
           <Container className="mt-4">

               <Switch>
                   <Route path="/" exact>
                       <HomeView
                           quote={quote}
                           setQuote={setQuote}
                       />
                   </Route>
                   <Route path="/equipment" >
                       <EquipmentView
                           equipment={equipment}
                           setEquipment={setEquipment}
                       />
                   </Route>
                   <Route path="/category" >
                       <CategoryView
                           category={category}
                           setCategory={setCategory}
                           saveFinal={saveFinal}
                           setSaveFinal={setSaveFinal}
                           equipment={equipment}
                       />
                   </Route>
                   <Route path="/workout" >
                       <WorkoutView
                           workout={workout}
                           setWorkout={setWorkout}
                           setSaveFinal={setSaveFinal}
                           saveFinal={saveFinal}
                           category={category}
                           setRefresh={setRefresh}
                           refresh={refresh}
                       />
                   </Route>
               </Switch>

           </Container>
       </BrowserRouter>
    );
}

export default App;
