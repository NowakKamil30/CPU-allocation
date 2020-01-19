import {change_algorithm} from "../actions/types";


const INITIAL_STATE = {pids:[], algorithm:""};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case change_algorithm:{
      const {payload} = action;
      return {...state,algorithm:payload};
    }
    default:{
      return state;
    }
  }
};