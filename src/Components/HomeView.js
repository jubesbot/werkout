import React from 'react';
import {NavLink} from "react-router-dom";

function HomeView(props) {
    return (
        <div>
            Generate a workout <NavLink to="/equipment">here</NavLink>!
        </div>
    );
}

export default HomeView;