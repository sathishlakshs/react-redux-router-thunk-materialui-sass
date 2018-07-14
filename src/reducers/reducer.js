const reducer = function(state, action){
    if(action.type === "FrontEnd"){
        return action.payload
    }
    if(action.type === "BackEnd"){
        return action.payload
    }
    return state;
}

export default reducer;