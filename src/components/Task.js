import React from 'react';


const Task = ({task}) => {
    return (  
        <li className="taskList__item">
            <p className={task}>{task}</p>
        </li>
    );
}
 
export default Task;