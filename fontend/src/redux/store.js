import { reducer as authReducer } from "./AuthReducer/reducer"
import {reducer as productReducer} from "./ProductReducer/reducer"
import {reducer as cartReducer} from "./CartReducer/reducer"
//import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

const myMiddleware=({dispatch,getState})=>(next)=>(action)=>{
if(typeof action==='function'){
    return action(dispatch,getState)
}
return next(action)
}
const rootreducer=combineReducers({
authReducer,
productReducer,
cartReducer
})
export const store=legacy_createStore(rootreducer,applyMiddleware(myMiddleware))