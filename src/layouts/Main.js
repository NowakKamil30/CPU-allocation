import React from 'react';
import {Route,Switch}  from "react-router-dom";
import Aside from "./Aside";
import Home from "../pages/Home";
import CreatePIDs from "../pages/CreatePIDs";
import ShowChart from "../pages/ShowChart";
import ShowSimulation from "../pages/ShowSimulation";
import ShowStatistics from "../pages/ShowStatistics";
import ErrorPage from "../pages/ErrorPage";

const Main = () =>{
    return (
        <main className="main">
            <Aside/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/createPIDs" exact component={CreatePIDs}/>
                <Route path="/showSimulation" exact component={ShowSimulation}/>
                <Route path="/showChart" exact component={ShowChart}/>
                <Route path="/showStatistics" exact component={ShowStatistics}/>
                <Route component={ErrorPage}/>
            </Switch>
        </main>
    )
}

export default Main;