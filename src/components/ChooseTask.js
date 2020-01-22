import React,{useState} from 'react';
import {connect} from "react-redux";
import {editTaskPid} from "../actions/index";

const ChooseTask = ({index,option,editTaskPid}) => {
    
    const [isCPU,setCPU] =useState(option==="CPU"?true:false);
    const [isIO,setIO] =useState(option==="IO"?true:false);
    return (
        <div className="choose-task">
            <label className="choose-task__label">
                <input type="checkbox" value="CPU" className="choose-task__checkbox" onChange={()=>{}} onClick={()=>{
                    setCPU(true);
                    setIO(false);
                    editTaskPid(index,"CPU");
                }}  checked={isCPU} />
                <p className="choose-task__text">CPU</p>
            </label>
            <label className="choose-task__label">
                <input type="checkbox" value="IO" className="choose-task__checkbox" onChange={()=>{}} onClick={()=>{
                    setCPU(false);
                    setIO(true);
                    editTaskPid(index,"IO");
                }} checked={isIO} />
                <p className="choose-task__text">IO</p>
            </label>
        </div>
      );
}
const mapStateToProps = state =>{
    return{

    }
}
export default connect(mapStateToProps,{editTaskPid})(ChooseTask);