import ActionType from "./actionType"

const SET_INITIAL = (value) => {
    return {
        type : ActionType.INITIAL_SET_INITIAL,
        inputValue : value
    }
}

const SET_BOOK_DATA = (value) => {
    return {
        type: ActionType.SET_BOOK,
        inputValue : value
    }
}
const SET_SEARCH_BOOK = (value) => {
    return {
        type: ActionType.SET_LOOK_BOOK,
        inputValue : value
    }
}

const SET_REMOVE_BOOK = () => {
    return {
        type : ActionType.SET_ROLLBACK_BOOK
    }
}   
  


{/*export {
    SET_INITIAL,
    SET_BOOK_DATA,
    SET_SEARCH_BOOK,
    SET_REMOVE_BOOK,
}*/}
