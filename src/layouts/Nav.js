import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = ()=> {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/createPIDs">Stwórz procesy</NavLink>
                </li>
                <li>
                    <NavLink to="/showSimulation">Pokaż symulację</NavLink>
                </li>
                <li>
                    <NavLink to="/showChart">Pokaż wykres</NavLink>
                </li>
            </ul>
        </nav>
    )
}