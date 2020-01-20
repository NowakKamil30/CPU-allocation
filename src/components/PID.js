import React from 'react';
import Task from "../components/Task";

const PID = ({name,tasks,priority,id}) => {
    return (
        <li className="pid">
            <p className="pid__name">{name}</p>
            <p className="pid__priority">{priority}</p>
            <p className="pid__id">{id}</p>
            <ul className={"taskList pid__taskList"}>
                {tasks.map((task,index)=>(
                <Task 
                key={index} 
                task={task}
                />)
                )}
            </ul>
        </li>
      );
}
 
export default PID;