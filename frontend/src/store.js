import { createStore, combineReducers, applyMiddleware } from "redux"
import { userRegisterReducer } from "./reducers/userReducers"
import { eventCreateReducer, getEventsReducer, removeEventReducer, updateEventReducer } from "./reducers/eventReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer } from "./reducers/userReducers"
import thunk from "redux-thunk"


const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    eventCreate: eventCreateReducer,
    allEvents: getEventsReducer,
    removeEvent: removeEventReducer,
    updateEvent: updateEventReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store