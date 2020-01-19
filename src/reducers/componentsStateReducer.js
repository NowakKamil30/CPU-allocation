import {show_algorithm_list} from "../actions/types";


const INITIAL_STATE = {algorithmListShow:false};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case show_algorithm_list:{
      const algorithmListShow = !state.algorithmListShow;
      return {...state,algorithmListShow};
    }
    default:{
      return state;
    }
  }
};