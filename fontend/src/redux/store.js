import { reducer as userReducer } from "./UserReducer/reducer"
import {applyMiddleware, combaineReducer,legacy_createStore} from "redux"
import thunk from "redux-thunk"
const rootreducer=combaineReducer({
userReducer,

})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))