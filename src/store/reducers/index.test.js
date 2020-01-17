import { rootReducer } from "./index.js"

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

    // it("Should return new state if receiving type", () => {

    //     const posts = [{title: "Test 1"}, {title: "Test 2"}, {title: "Test 3"}]
    //     const newState = rootReducer(undefined, {
    //         type: types.GET_POSTS,
    //         payload: posts
    //     })
    //     expect(newState).toEqual(posts);

    // })

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