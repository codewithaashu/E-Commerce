const initialState = {
    product:[]
}
const fetchAllProductFunc = (state = initialState, action) => {
    const {type,payload}= action;
    switch (type) {
        case "FETCH_ALL_PRODUCTS":
            return {...state.product,product:payload};
        default : return state;
    }
}
export default fetchAllProductFunc;