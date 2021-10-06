import { createStore, combineReducers, applyMiddleware } from "redux"
import { userRegisterReducer } from "./reducers/userReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer } from "./reducers/userReducers"
import thunk from "redux-thunk"


const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
})

const initialState = {
    userLogin: {}
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store