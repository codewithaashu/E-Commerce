import { combineReducers } from "redux";
import fetchAllProductFunc from "./Reducer1";
import fetchCategoryProductFunc from "./Reducer2";
import fetchProductDetailsFunc from "./Reducer3";
import setUserFunc from "./Reducer4";
import fetchSearchProductFunc from "./Reducer5";
const rootReducer = combineReducers({
    fetchAllProductFunc,
    fetchCategoryProductFunc,
    fetchProductDetailsFunc,
    setUserFunc,
    fetchSearchProductFunc
})
export default rootReducer;
