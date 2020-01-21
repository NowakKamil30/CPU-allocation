import React,{useState} from 'react';
import {connect} from "react-redux";
import {
    simulationWork,
    showAlgorithmList} from "../actions/index";
import Button from "../components/Button";
import PIDTask from "../components/PIDTask";
import preparePidsToAlgorithm from "../helpers/preparePidsToAlgorithm";
import changePIDsToTaskList from "../helpers/changePIDsToTaskList";


const ShowSimulation = ({
    pids,
    simulationWork,
    isWork,
    algorithm,
    algorithmListShow,
    showAlgorithmList}) => {
    const [tasks,setTasks]=useState([]);
    let tasksList=[];
    const addTaskToList=()=>{
        tasks.push(tasksList[tasks.length]);
        setTasks([...tasks]); 
        if(tasks.length<tasksList.length)
        {
            setTimeout(()=>{addTaskToList()},200);
        }
    }
    const startSimulationHandle =()=>{
            console.log(tasks);
            simulationWork(!isWork);
            if(algorithmListShow)
            {
                showAlgorithmList();
            }
            if(!isWork)
            {
                const pidTasks = preparePidsToAlgorithm(pids,algorithm);
                console.log(pidTasks);
                tasksList = changePIDsToTaskList(pidTasks);
                addTaskToList();
            }   
            if(isWork)
            {
                setTasks([]);
                simulationWork(!isWork);
            }
    }
    return (
    <>
    {
        pids.length===0
        ?
        <h3>Proszę stworzyć proces</h3>
        :
            algorithm===""
            ?
        <h3>Proszę wybrać algorytm</h3>
        :
        <Button
        text={isWork?
            "resetuj symulacje"
            :"Uruchom symulacje"}
        className="button"
        onClick={startSimulationHandle}
        />
    }
        <ul className="showSimulation__list">
             {tasks.map(({task,pid,id,priority},index)=>(
            <PIDTask
            key={id+":"+index}
            name={pid}
            task={task}
            id={id}
            priority={priority}
            />))}
        </ul>
    
    </>
    );
}
const mapStateToProps = state =>{
    return {
        pids:state.allocation.pids,
        algorithm:state.allocation.algorithm,
        isWork: state.allocation.isWork,
        algorithmListShow: state.componentState.algorithmListShow
    }
}

export default connect(mapStateToProps,{simulationWork,showAlgorithmList})(ShowSimulation);