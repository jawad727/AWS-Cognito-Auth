import { UPDATE_USER, POST_LIKE, FETCH_LIKES, FETCH_SINGLE_USER, POST_COMMENT, FETCH_USERS, FETCH_COMMENTS, POST_USER, FETCH_POSTS, MAKE_POST, DELETE_POST, FETCH_POST_BY_USER } from "../actions"

const initialState = {
    usersArray: [], 
    allPostsArray: [], 
    allPostsByUser: [], 
    postComments: [], 
    likesArray: [], 
    singleUser: [], 
    userFetched: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {
        ...state,
        usersArray: action.payload
        }
        case POST_USER:
            return {
        ...state,
        usersArray: [ ...state.usersArray, action.payload]
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
        case FETCH_SINGLE_USER:
                return {
        ...state,
        singleUser: action.payload,
        userFetched: true
        }
        case MAKE_POST:
            return {
        ...state,
        allPostsArray: [ ...state.allPostsArray, action.payload]
        }
        case POST_LIKE:
            return {
        ...state,
        likesArray: [ ...state.likesArray, action.payload]
        }
        case DELETE_POST:
            return {
        ...state,
        allPostsArray: [action.payload]
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
        case FETCH_LIKES:
            return {
        ...state,
        likesArray: action.payload
        }
        case UPDATE_USER:
            return {
        ...state,
        singleUser: [...state.singleUser, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer;