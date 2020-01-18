const INITIAL_STATE = {pids:[]};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {


    default:{
      return state;
    }break;
  }
};