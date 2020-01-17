import { rootReducer } from "./index.js"
import { UPDATE_USER, POST_LIKE, FETCH_LIKES, FETCH_SINGLE_USER, POST_COMMENT, FETCH_USERS, FETCH_COMMENTS, POST_USER, FETCH_POSTS, MAKE_POST, DELETE_POST, FETCH_POST_BY_USER } from "../actions/index"

describe("Root reducer", () => {

    it("should return default state", () => {
        const newState = rootReducer(undefined, {})
        expect(newState).toEqual({
                signedIn: false,
                usersArray: [],
                allPostsArray: [],
                allPostsByUser: [],
                postComments: [],
                likesArray: [],
                singleUser: [],
                userFetched: false
            })
    })


    describe(".userFetched", () => {

        it("Should return new state if receiving type", () => {

            const posts = [{title: "Test 1"}, {title: "Test 2"}, {title: "Test 3"}]
            const newState = rootReducer(undefined, {
                type: FETCH_SINGLE_USER,
                payload: posts
            })
            expect(newState.userFetched).toEqual(true);
    
        })
    })

    
    describe(".usersArray", () => {

        it("Should return new state if receiving type", () => {

            const posts = [{title: "Test 1"}, {title: "Test 2"}, {title: "Test 3"}]
            const newState = rootReducer(undefined, {
                type: FETCH_USERS,
                payload: posts
            })
            expect(newState.usersArray).toEqual(posts);
        })
    })


})

// {
//     signedIn: false,
//     usersArray: [],
//     allPostsArray: [],
//     allPostsByUser: [],
//     postComments: [],
//     likesArray: [],
//     singleUser: [],
//     userFetched: false
// }