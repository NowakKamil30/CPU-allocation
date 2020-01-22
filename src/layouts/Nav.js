import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {showAlgorithmList} from "../actions/index";
import AlgorithmList from "../components/AlgorithmList";
import Button from "../components/Button"; 
const Nav = ({showAlgorithmList,isWork})=> {
    return(
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink to="/" exact activeClassName="navigation__link--active"  className="navigation__link">Home</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/createPIDs" exact activeClassName="navigation__link--active" className="navigation__link">Stwórz procesy</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/showSimulation" exact activeClassName="navigation__link--active" className="navigation__link">Pokaż symulację</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/showStatistics" exact activeClassName="navigation__link--active" className="navigation__link">Pokaż statystyki</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/showChart" exact activeClassName="navigation__link--active" className="navigation__link">Pokaż wykres</NavLink>
                </li>
                <li className="navigation__item navigation__item--special"> 
                    <Button
                    className="button button--navigation"
                    disabled={isWork}
                    onClick = {()=>{showAlgorithmList()}}text="wybierz algorytm"/>
                    <AlgorithmList/>  
                </li>
            </ul>
       
        </nav>
    )
}
const mapStateToProps = state =>{
    return{
        isWork: state.allocation.isWork
    }
}
export default connect(mapStateToProps,{showAlgorithmList})(Nav);