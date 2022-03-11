import ActionType from "../actionType"

const preferencesState = {
    data : [
        
    ]
}

const preferencesReducer = (state = preferencesState, action) => {
    if(action.type === ActionType.SET_PREFERENCES){
        return{
            ...state,
            data : [...state.data, action.inputValue]
        }
    }
    if(action.type === ActionType.DELETE_PREFERENCE){
        return{
            ...state,
            data : [...state.data.filter(item => item.id !== action.inputValue)]
        }
    }
    return state
}

export default preferencesReducer