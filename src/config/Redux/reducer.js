import { combineReducers } from 'redux'
import bookReducer from './BookReducer/BookReducer'
const initialState = {
    data : "Hello World"
}

const initialReducer = (state = initialState, action) => {
    return state
}

export default combineReducers({
    initialReducer,
    bookReducer,
})