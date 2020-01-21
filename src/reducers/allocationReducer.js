import {
  change_algorithm,
  add_pid,
  reset_pids,
  simulation_work} from "../actions/types";


const INITIAL_STATE = {
   pids:[],
   algorithm:"",
   isWork:false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case change_algorithm:{
      const {payload} = action;
      return {...state,algorithm:payload};
    }
    case add_pid:{
      const {payload} = action;
      const newPids = [...state.pids];
      newPids.push(payload);
      return {...state,pids:newPids}
    }
    case reset_pids:{
      return {...state,pids:INITIAL_STATE.pids};
    }
    case simulation_work:{
      const{payload} = action;
      return {...state, isWork:payload}
    }
    default:{
      return state;
    }
  }
};