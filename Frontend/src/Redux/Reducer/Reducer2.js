const initialState={
    product:[]
}
const fetchCategoryProductFunc = (state=initialState,action)=>{
    const {type,payload}= action;
    switch (type) {
        case "FETCH_CATEGORY_PRODUCTS":
            return {...state.product,product:payload};
        case "REMOVE_SELECTION":
            return{product:[]}
        default : return state;
    }
}
export default fetchCategoryProductFunc;