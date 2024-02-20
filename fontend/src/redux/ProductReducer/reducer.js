import { ADD_TO_CART, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";

const inititalState={
    isLoad:false,
    isErr:false,
    products:[]
}
const reducer=(state=inititalState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {...state,isLoad:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoad:false,products:[payload]}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoad:false,isErr:true}
        default:
            return state;
    }
}