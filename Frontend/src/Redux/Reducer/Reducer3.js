const initialState={
    product :[]
}
const fetchProductDetailsFunc = (state=initialState,action)=>{
    const {type,payload}= action;
    switch(type){
        case "SELECTED_PRODUCT_DETAILS":
            return {...state.product,product:payload};
        case "REMOVE_SELECTION":
            return{product:[]}
        default : return state;
    }
}
export default fetchProductDetailsFunc;