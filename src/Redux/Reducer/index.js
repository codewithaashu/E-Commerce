import { combineReducers } from "redux";
import fetchAllProductFunc from "./Reducer1";
import fetchCategoryProductFunc from "./Reducer2";
import fetchProductDetailsFunc from "./Reducer3";
import setUserFunc from "./Reducer4";
const rootReducer = combineReducers({
    fetchAllProductFunc,
    fetchCategoryProductFunc,
    fetchProductDetailsFunc,
    setUserFunc
})
export default rootReducer;
