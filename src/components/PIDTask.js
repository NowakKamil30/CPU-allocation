import React from 'react'

const PIDTask = ({name,task,priority,id}) => {
    return (
        <li className="pid-task">
            <p className="pid-task__name">{name+"("+id+")"}</p>
            <p className="pid-task__priority">{"prioritet: "+priority}</p>
            <p className="pid-task__task">{task}</p>
        </li>
      );
}
 
export default PIDTask;