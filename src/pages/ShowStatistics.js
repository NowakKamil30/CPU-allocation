import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import {
    tasksAll,
    waitingALL,
    cpuAll} from "../helpers/forStatistics";
import addWaiting from "../helpers/addWaiting";
import preparePidsToAlgorithm from "../helpers/preparePidsToAlgorithm";
import StatisticsItem from "../components/StatisticsItem";
const ShowStatistics = ({pids,algorithm}) => {
    const[dataPids,setDataPids]=useState(pids);
    useEffect(()=>{
        setDataPids(preparePidsToAlgorithm(pids,algorithm));
    },[algorithm,setDataPids,pids])
    return (
        <div className="statistics">
                    {
                    pids.length===0
                    ?
                    <h3 className="error error--big">Proszę stworzyć proces</h3>
                    :
                        algorithm===""
                        ?
                    <h3 className="error error--big">Proszę wybrać algorytm</h3>
                    :
                    <>
                        <ul className="statistics__list">
                            {addWaiting(dataPids).map(({waiting,tasks,id,name})=>(
                                <StatisticsItem
                                key={id}
                                id={id}
                                name={name}
                                waiting={waiting}
                                tasks={tasks}
                                dataPids={dataPids}
                                />
                            ))}
                        </ul>
                        <div className="statistics__container">
                            <p className="statistics__text statistics__text--important">Avg. Response time: {Math.round(waitingALL(dataPids)/dataPids.length*100)/100}</p>
                            <p className="statistics__text statistics__text--important">Avg. Waiting time: {Math.round(waitingALL(dataPids)/dataPids.length*100)/100}</p>
                            <p className="statistics__text statistics__text--important">Avg. Turnaround time: {tasksAll(dataPids)/dataPids.length}</p>
                            <p className="statistics__text statistics__text--important">Efficienc: {cpuAll(dataPids)/tasksAll(dataPids)*100}%</p>
                            <p className="statistics__text statistics__text--important">Throughtput: {dataPids.length/tasksAll(dataPids)}</p>
                        </div>
                    </>
                }
        </div>
    )
}
 
const mapStateToPros = state =>{
    return {
       pids:state.allocation.pids,
       algorithm:state.allocation.algorithm,
    }
}
export default connect(mapStateToPros,{})(ShowStatistics);