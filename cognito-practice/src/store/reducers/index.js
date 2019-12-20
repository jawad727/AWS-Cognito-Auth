import { UPDATE_POST, POST_COMMENT, FETCH_USERS, FETCH_COMMENTS, POST_USER, FETCH_POSTS, MAKE_POST, DELETE_POST, FETCH_POST_BY_USER } from "../actions"

const initialState = {
    signedIn: false,
    usersArray: [],
    allPostsArray: [],
    allPostsByUser: [],
    postComments: [],
    likesArray: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {
        ...state,
        usersArray: action.payload
        }
        case POST_USER:
            return {
        ...state,
        usersArray: [ ...this.state.usersArray, action.payload]
        }
        case FETCH_POSTS:
            return {
        ...state,
        allPostsArray: action.payload
        }
        case FETCH_POST_BY_USER:
                return {
        ...state,
        allPostsByUser: action.payload
        }
        case MAKE_POST:
            return {
        ...state,
        allPostsArray: [ ...this.state.allPostsArray, action.payload]
        }
        case DELETE_POST:
            return {
        ...state,
        allPostsArray: action.payload
        }
        case FETCH_COMMENTS:
            return {
        ...state,
        postComments: action.payload
            }
        case POST_COMMENT:
            return {
        ...state,
        postComments: [...state.postComments, action.payload]
        }
        case UPDATE_POST:
            return {
        ...state,
        likesArray: [...state.likesArray, action.payload]
        }
        default:
            return state
    }
}

export default rootReducer;