import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = ()=> {
    return(
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__link">
                    <NavLink to="/createPIDs" exact activeClassName="navigation__link--active" >Stwórz procesy</NavLink>
                </li>
                <li className="navigation__link">
                    <NavLink to="/showSimulation" exact activeClassName="navigation__link--active">Pokaż symulację</NavLink>
                </li>
                <li className="navigation__link">
                    <NavLink to="/showChart" exact activeClassName="navigation__link--active">Pokaż wykres</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;