import React from 'react';
import {connect} from "react-redux";
import PID from "../components/PID";
const Aside = ({pids})=>{
    return (
        <aside>
            {pids.map(({name,tasks,priority,id})=>(
                <PID
                key={id}
                name={name}
                tasks={tasks}
                priority={priority}
                id={id}
                />
            ))}
        </aside>
    );
}
const mapStateToProps = state =>{
    return{
        pids:state.allocation.pids
    }
}
export default connect(mapStateToProps,{})(Aside);