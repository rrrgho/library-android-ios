import ActionType from "../actionType"

// Books Reducer
const bookState = {
    books:undefined,
    booksSearch:undefined,
    page:1,
    pageSearch:1,
    booksTmpSearch:undefined,

    ebooks:undefined,
    ebooksSearch:undefined,
    epage:1,
    epageSearch:1,
    ebooksTmpSearch:undefined,
}
const bookReducer = (state = bookState, action) => {
    if(action.type === ActionType.SET_BOOK){
        return{
            ...state,
            books: state.books ? [...state.books, ...action.inputValue.data] : [...action.inputValue.data],
            page:action.inputValue.page
        }
    }
    if(action.type === ActionType.SET_LOOK_BOOK){
        let tmpSearch = state.booksSearch
        return{
            ...state,
            booksSearch: state.booksSearch ?  [...state.booksSearch, ...action.inputValue.data] : [...action.inputValue.data],
            pageSearch:action.inputValue.page,
            booksTmpSearch:tmpSearch
        }
    }
    if(action.type === ActionType.SET_LOOK_BOOK_FIRST){
        let tmpSearch = state.booksSearch
        return{
            ...state,
            booksSearch: [...action.inputValue.data],
            pageSearch:action.inputValue.page,
            booksTmpSearch:tmpSearch
        }
    }
    if(action.type === ActionType.SET_ROLLBACK_BOOK){
        return{
            ...state,
            booksSearch:state.booksTmp,
            booksTmpSearch:undefined,
            pageSearch:1
        }
    }



    if(action.type === ActionType.SET_EBOOK){
        return{
            ...state,
            ebooks: state.ebooks ? [...state.ebooks, ...action.inputValue.data] : [...action.inputValue.data],
            epage:action.inputValue.page
        }
    }
    if(action.type === ActionType.SET_LOOK_EBOOK){
        let etmpSearch = state.ebooksSearch
        return{
            ...state,
            ebooksSearch: state.ebooksSearch ? [...state.ebooksSearch, ...action.inputValue.data] : [...action.inputValue.data],
            epageSearch:action.inputValue.page,
            booksTmpSearch:etmpSearch
        }
    }
    if(action.type === ActionType.SET_ROLLBACK_EBOOK){
        return{
            ...state,
            ebooksSearch:state.ebooksTmp,
            ebooksTmpSearch:undefined,
            epageSearch:1
        }
    }
    return state
}

export default bookReducer