import React from 'react'

const PIDTask = ({name,task,priority,id}) => {
    return (
        <li className="pidTask">
            <p className="pidTask__name">{"nazwa: "+name}</p>
            <p className="pidTask__priority">{"prioritet: "+priority}</p>
            <p className="pidTask__id">{"id: "+id}</p>
            <p className="pidTask__task">{task}</p>
        </li>
      );
}
 
export default PIDTask;