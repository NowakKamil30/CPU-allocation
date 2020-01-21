import {add_task_to_pid,edit_task_pid,name_pid,priority_pid,reset_pid} from "../actions/types";


const INITIAL_STATE = {pidTasks:[],name:"",priority:1};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case edit_task_pid:
      {
        const{value,index}=action.payload;
        const newPidTasks= [...state.pidTasks];
        newPidTasks[index]=value;
        return {...state,pidTasks:newPidTasks};
      }
      case name_pid:{
          const {payload} = action;
          if(payload.length<30)
          {
            return {...state,name:payload};
          }
          return state;
      }
      case priority_pid:{
        const {payload} = action;
        const lastLetter = payload[payload.length-1];
        if(lastLetter!=="e" && payload<=10 && payload>=1)
        {
            return {...state, priority:payload}
        }
        return state;
      }
      case reset_pid:{
          return INITIAL_STATE;
      }
      case add_task_to_pid:
      {
            const{payload} = action;
            const newPidTasks = [...state.pidTasks];
            newPidTasks.push(payload);
            return {...state,pidTasks:newPidTasks};
      }
    default:{
      return state;
    }
  }
};