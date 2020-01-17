import { rootReducer } from "./index.js"
import { UPDATE_USER, POST_LIKE, FETCH_LIKES, FETCH_SINGLE_USER, POST_COMMENT, FETCH_USERS, FETCH_COMMENTS, POST_USER, FETCH_POSTS, MAKE_POST, DELETE_POST, FETCH_POST_BY_USER } from "../actions/index"

const posts = [{title: "Test 1"}, {title: "Test 2"}, {title: "Test 3"}]

describe("Root reducer", () => {

    it("should return default state", () => {
        const newState = rootReducer(undefined, {})
        expect(newState).toEqual({
                usersArray: [],
                allPostsArray: [],
                allPostsByUser: [],
                postComments: [],
                likesArray: [],
                singleUser: [],
                userFetched: false
            })
        console.log(newState)
    })


    describe(".userFetched", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_SINGLE_USER,
                payload: posts
            })
            expect(newState.userFetched).toEqual(true);
    
        })
    })

    
    describe(".usersArray", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_USERS,
                payload: posts
            })
            expect(newState.usersArray).toEqual(posts);
        })
    })


    describe(".allPostsArray", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_POSTS,
                payload: posts
            })
            expect(newState.allPostsArray).toEqual(posts);
        })
    })

    
    describe(".allPostsByUser", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_POST_BY_USER,
                payload: posts
            })
            expect(newState.allPostsByUser).toEqual(posts);
        })
    })

    
    describe(".postComments", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_COMMENTS,
                payload: posts
            })
            expect(newState.postComments).toEqual(posts);
        })
    })

    describe(".likesArray", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_LIKES,
                payload: posts
            })
            expect(newState.likesArray).toEqual(posts);
        })
    })


    describe(".singleUser", () => {

        it("Should return new state if receiving type", () => {

            const newState = rootReducer(undefined, {
                type: FETCH_SINGLE_USER,
                payload: posts
            })
            expect(newState.singleUser).toEqual(posts);
        })
    })

})
