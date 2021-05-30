import { combineReducers } from 'redux'

const initialState = {
    data : "Hello World"
}

const initialReducer = (state = initialState, action) => {
    return state
}

export default combineReducers({
    initialReducer
})