import React from "react"
import { shallow } from "enzyme"
import LandingPage from "./LandingPage"
import { findByTestAtt } from "../reusables/resuableFunctions"

const setUp = (props={}) => {
    const component = shallow(<LandingPage {...props} />)
    return component
}


describe("Landing container", () => {

    let component;
    beforeEach(() => { // says do this within before every function
        component = setUp(); 
    })

    it("Should render without errors", () => {
        const wrapper = findByTestAtt(component, "headerComponent")
        expect(wrapper.length).toBe(1);
    })

    describe("Slogan", () => {
        it("Should render without errors", () => {
            const slogan = findByTestAtt(component, "landingSlogan")
            expect(slogan.length).toBe(3);
        })
    })

    describe("Main image", () => {
        it("Should render without errors", () => {
            const mainImage = findByTestAtt(component, "mainImage")
            expect(mainImage.length).toBe(1);
        })
    })

    describe("Lower image", () => {
        it("Should render without errors", () => {
            const mainImage = findByTestAtt(component, "lowerImage")
            expect(mainImage.length).toBe(1);
        })
    })

    describe("Descriptive statement", () => {
        it("Should render without errors", () => {
            const slogan = findByTestAtt(component, "DescriptiveStatement")
            expect(slogan.length).toBe(4);
        })
    })

})