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


export {
    SET_INITIAL,
    SET_BOOK_DATA
}