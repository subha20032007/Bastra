import { ADD_TO_CART } from "./actionType";

const inititalState={
    cart:[]
}
export const reducer=(state=inititalState,{type,payload})=>{
    switch(type){
        case ADD_TO_CART:
            return {...state,cart:[...state.cart,payload]}
        default:
            return state;
    }
}