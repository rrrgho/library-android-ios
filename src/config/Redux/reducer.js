import { combineReducers } from 'redux'
import bookReducer from './BookReducer/BookReducer'
import initialReducer from './InitialReducer/InitialReducer'




export default combineReducers({
    initialReducer,
    bookReducer,
})