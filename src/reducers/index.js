import { combineReducers } from "redux";
import allocationReducer from "./allocationReducer";
import componentsStateReducer from "./componentsStateReducer";
import pidReducer from "./pidReducer";

export default combineReducers({
        allocation:allocationReducer,
        componentState: componentsStateReducer,
        pid:pidReducer
    })
