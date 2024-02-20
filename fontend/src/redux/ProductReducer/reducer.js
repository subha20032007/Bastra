import { ADD_TO_CART, GET_PRODUCT_REQUEST } from "./actionType";

const inititalState={
    isLoad:false,
    isErr:false,
    products:[]
}
const reducer=(state=inititalState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {...state,isLoad:true}
        default:
            return state;
    }
}