import ActionType from "./actionType"
export const SET_BOOK_DATA = (value) => {
    return {
        type: ActionType.SET_BOOK,
        inputValue : value
    }
}   