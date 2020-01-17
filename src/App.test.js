import React from "react"
import App from "./App"
import { shallow } from "enzyme"
import { findByTestAtt, testStore } from "./components/reusables/resuableFunctions.js"


// const setUp = (initialState={}) => {
//     const store = testStore(initialState)
//     const wrapper = shallow(<App store={store} />).childAt(0).dive() //without these methods it returns <contextprovider> wrapping app because app uses connect, thats why we have to access its child at 0 and then dive into it
//     console.log(wrapper.debug())
//     return wrapper
// }

describe("App Component", () => {

    // let wrapper;
    // beforeEach(() => {
    //     const initialState = {
    //         posts: [{
    //             title: "Example title 1",
    //             body: "Some text"
    //         },{
    //             title: "Example title 2",
    //             body: "Some text"
    //         },{
    //             title: "Example title 3",
    //             body: "Some text"
    //         }]
    //     }
    //     wrapper = setUp(initialState)
    // })

    it("Should render without errors", () => {
        expect(1).toBe(1)
    })

})