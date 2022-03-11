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
const SET_SEARCH_BOOK_FIRST = (value) => {
    return {
        type: ActionType.SET_LOOK_BOOK_FIRST,
        inputValue : value
    }
}

const SET_REMOVE_BOOK = () => {
    return {
        type : ActionType.SET_ROLLBACK_BOOK
    }
}


const SET_EBOOK_DATA = (value) => {
    return {
        type: ActionType.SET_EBOOK,
        inputValue : value
    }
}
const SET_SEARCH_EBOOK = (value) => {
    return {
        type: ActionType.SET_LOOK_EBOOK,
        inputValue : value
    }
}

const SET_REMOVE_EBOOK = () => {
    return {
        type : ActionType.SET_ROLLBACK_EBOOK
    }
}





const SET_PREFERENCES = (value) => {
    return {
        type : ActionType.SET_PREFERENCES,
        inputValue : value
    }
}
const DELETE_PREFERENCES = (value) => {
    return {
        type : ActionType.DELETE_PREFERENCE,
        inputValue : value
    }
}
  


export{
    SET_INITIAL,
    SET_BOOK_DATA,
    SET_SEARCH_BOOK,
    SET_REMOVE_BOOK,
    SET_EBOOK_DATA,
    SET_SEARCH_EBOOK,
    SET_SEARCH_BOOK_FIRST,
    SET_REMOVE_EBOOK,
    SET_PREFERENCES,
    DELETE_PREFERENCES
}