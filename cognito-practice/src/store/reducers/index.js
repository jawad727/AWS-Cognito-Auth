import { FETCH_USERS } from "../actions"

const initialState = {
    signedIn: false,
    usersArray: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {
        usersArray: action.payload
        }
        default:
            return state
    }
}

export default rootReducer;