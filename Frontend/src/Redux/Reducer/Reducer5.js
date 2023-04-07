const initialState={
    product:[]
}
const fetchSearchProductFunc = (state=initialState,action)=>{
    switch(action.type){
        case "SEARCH_PRODUCT":
            return {...state.product,product:action.payload};
        default:
            return state;

    }
}
export default fetchSearchProductFunc;