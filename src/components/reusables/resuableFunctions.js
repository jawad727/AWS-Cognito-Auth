import checkPropTypes from "check-prop-types"
import { applyMiddleware, createStore } from "redux"
import rootReducer from "../../store/reducers/index"
import ReduxThunk from "redux-thunk"

export const findByTestAtt = (component, attr) => { // finds element based on its data-test attribute
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, "props", component.name)
    return propsErr
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}