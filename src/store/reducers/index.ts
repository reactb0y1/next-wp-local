import {combineReducers} from "redux";
import testReducer from "./testReducer";
import globalStore from "./globalStore";

export default combineReducers({
    testData: testReducer,
    globalStore,
})
