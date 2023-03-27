const initialState={
    user:[]
}
const setUserFunc = (state=initialState,action)=>{
    const {type,payload}= action; 
    switch(type){
        case "SET_USER":
            return {...state.user,user:payload};
        default:
            return state;
    }
}
export default setUserFunc;