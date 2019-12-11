import { FETCH_USERS, POST_USER, FETCH_POSTS, MAKE_POST } from "../actions"

const initialState = {
    signedIn: false,
    usersArray: [],
    allPostsArray: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {
        usersArray: action.payload
        }
        case POST_USER:
            return {
        usersArray: action.payload
        }
        case FETCH_POSTS:
            return {
        allPostsArray: action.payload
        }
        case MAKE_POST:
            return {
        allPostsArray: action.payload
        }
        default:
            return state
    }
}

export default rootReducer;