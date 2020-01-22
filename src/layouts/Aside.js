import React from 'react';
import {connect} from "react-redux";
import {resetPids} from "../actions/index";
import Button from "../components/Button";
import PID from "../components/PID";
const Aside = ({pids,resetPids})=>{
    return (
        <aside className="aside">
            <ul className="aside__list">
                {pids.map(({name,tasks,priority,id})=>(
                    <PID
                    key={id}
                    name={name}
                    tasks={tasks}
                    priority={priority}
                    id={id}
                    />
                ))}
            </ul>
            {pids.length>0?
            <Button 
            text="reset"
            onClick={resetPids}
            className={"button button--aside aside__button"}
            />
            :null}
        </aside>
    );
}
const mapStateToProps = state =>{
    return{
        pids:state.allocation.pids
    }
}
export default connect(mapStateToProps,{resetPids})(Aside);