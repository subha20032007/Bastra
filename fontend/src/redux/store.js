import { reducer as authReducer } from "./AuthReducer/reducer"
import {reducer as productReducer} from "./ProductReducer/reducer"
import {reducer as cartReducer} from "./CartReducer/reducer"
import {applyMiddleware, combaineReducer,legacy_createStore} from "redux"
import thunk from "redux-thunk"
const rootreducer=combaineReducer({
authReducer,
productReducer,
cartReducer
})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))