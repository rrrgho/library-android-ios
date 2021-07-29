import ActionType from "../actionType"

// Books Reducer
const bookState = {
    books:undefined,
    page:1,
    pageSearch:1,
    booksTmp:undefined,
}
const bookReducer = (state = bookState, action) => {
    if(action.type === ActionType.SET_BOOK){
        let array = []
        if(!action.inputValue.refresh){
            array = state.books ?? []
            action.inputValue.data.map(item => {
                array.push(item)
            })
        }else{
            array = action.inputValue.data
        }
        return{
            ...state,
            books: array,
            page:action.inputValue.page
        }
    }
    if(action.type === ActionType.SET_LOOK_BOOK){
        let tmp = state.books
        let array = state.booksTmp ?? []
        action.inputValue.data.map(item => {
            array.push(item)
        })
        return{
            ...state,
            books: array,
            pageSearch:action.inputValue.page,
            booksTmp:tmp
        }
    }
    if(action.type === ActionType.SET_ROLLBACK_BOOK){
        return{
            ...state,
            books:state.booksTmp,
            booksTmp:undefined,
            pageSearch:1
        }
    }
    return state
}

export default bookReducer