import { combineReducers } from "redux";
import allocationReducer from "./allocationReducer";

export default combineReducers({
        allocation:allocationReducer
    })
