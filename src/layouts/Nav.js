import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = ()=> {
    return(
        <nav className="navigation">
            <ul className="navigation__list">
                <li >
                    <NavLink to="/" exact activeClassName="navigation__link--active"  className="navigation__link">Home</NavLink>
                </li>
                <li >
                    <NavLink to="/createPIDs" exact activeClassName="navigation__link--active" className="navigation__link">Stwórz procesy</NavLink>
                </li>
                <li >
                    <NavLink to="/showSimulation" exact activeClassName="navigation__link--active" className="navigation__link">Pokaż symulację</NavLink>
                </li>
                <li >
                    <NavLink to="/showStatistics" exact activeClassName="navigation__link--active" className="navigation__link">Pokaż statystyki</NavLink>
                </li>
                <li >
                    <NavLink to="/showChart" exact activeClassName="navigation__link--active" className="navigation__link">Pokaż wykres</NavLink>
                </li>
                <li>
                    
                </li>
            </ul>
        </nav>
    )
}
export default Nav;