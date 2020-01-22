import React from 'react';
import Task from "../components/Task";

const PID = ({name,tasks,priority,id}) => {
    return (
        <li className="pid">
            <p className="pid__name">{name}({id})</p>
            <p className="pid__priority">priorytet: {priority}</p>
            <ul className={"pid__list"}>
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