import { combineReducers } from "redux";
import basketReducer from "./reducer";

const rootReducer = combineReducers({
    // we can access latest state of the app from 'data' 
    data : basketReducer,
})

export default rootReducer; 