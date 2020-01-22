import React from 'react';
import {
    cpuAll,
    ioAll} from "../helpers/forStatistics";

const StatisticsItem = ({name,id,waiting,tasks,dataPids}) => {
    return ( 
        <li className="statistics__item">
        <p className="statistics__text">{name}({id})</p>
        <p className="statistics__text">waiting: {waiting}</p>
        <p className="statistics__text">response: {waiting}</p>
        <p className="statistics__text">GPU: {cpuAll([{tasks}])/cpuAll(dataPids)*100}%</p>
        <p className="statistics__text">IO: {ioAll([{tasks}])/ioAll(dataPids)*100}%</p>
        <p className="statistics__text">Turnaround: {tasks.length+waiting}</p>
    </li>
     );
}
 
export default StatisticsItem;