import { combineReducers } from "redux";
import allocationReducer from "./allocationReducer";
import componentsStateReducer from "./componentsStateReducer";

export default combineReducers({
        allocation:allocationReducer,
        componentState: componentsStateReducer
    })
