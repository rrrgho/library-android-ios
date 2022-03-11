import { combineReducers } from 'redux'
import bookReducer from './BookReducer/BookReducer'
import initialReducer from './InitialReducer/InitialReducer'
import preferencesReducer from './Preferences'




export default combineReducers({
    initialReducer,
    bookReducer,
    preferencesReducer
})