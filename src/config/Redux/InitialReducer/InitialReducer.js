import ActionType from "../actionType"

const initialState = {
    data : {
        name : "Rian Iregho"
    }
}
const initialReducer = (state = initialState, action) => {
    if(action.type === ActionType.INITIAL_SET_INITIAL){
        return{
            ...state,
            data :  action.inputValue
        }
    }
    return state
}

export default initialReducer