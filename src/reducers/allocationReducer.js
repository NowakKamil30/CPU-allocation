import {change_algorithm,add_pid} from "../actions/types";


const INITIAL_STATE = {pids:[], algorithm:""};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
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
    default:{
      return state;
    }
  }
};