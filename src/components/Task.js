import React from 'react';


const Task = ({task}) => {
    return (  
        <li className="taskList__item">
            <p className="taskList__text">{task}</p>
        </li>
    );
}
 
export default Task;