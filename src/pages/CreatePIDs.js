import React from 'react';
import {connect} from "react-redux";
import {addTaskToPid,namePid,priorityPid,resetPid,addPid} from "../actions/index";
import Button from "../components/Button";
import ChooseTask  from "../components/ChooseTask";
import TextInput from "../components/TextInput";
import NumberInput from "../components/NumberInput";

const CreatePIDs = ({tasks,addTaskToPid,id,name,priority,namePid,priorityPid,addPid,resetPid}) =>{
    console.log(name);
    return (
 
        <div className="createPid">
            <h3>{"id: " + id}</h3>
            <TextInput
            placeholder="nazwa procesu"
            onChange={(e)=>namePid(e.target.value)}
            label="nazwa procesu"
            value={name}
            className="createPid__input"
            />
            <NumberInput
            label="Priorytet(1-10)"
            value={priority}
            onChange = {(e)=>priorityPid(e.target.value)}
            className="createPid__input"
            />
            <ul className="createPid__list">
                {tasks.map((task,index)=><li 
                key={index}>
                <ChooseTask 
                option={task} 
                index={index}/>
                </li>)}
            </ul>
            <Button text="dodaj zadanie" 
            className={"createPid__button"}
             onClick={()=>addTaskToPid()}/>
            {tasks.length>0?
            <Button 
            text="dodaj proces" 
            className={"createPid__button"}
            onClick={()=>{
                const pid = {id,name,priority,tasks};
                addPid(pid);
                resetPid();}}
                />
            :null}
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        tasks: state.pid.pidTasks,
        id: state.allocation.pids.length,
        name: state.pid.name,
        priority: state.pid.priority
    }
}
export default connect(mapStateToProps,{
    addTaskToPid,
    namePid,
    priorityPid,
    addPid,
    resetPid
})(CreatePIDs);