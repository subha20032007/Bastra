import {  DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

const inititalState={
    isLoad:false,
    isErr:false,
    products:[]
}
export const reducer=(state=inititalState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return {...state,isLoad:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoad:false,products:[payload]}
        case PRODUCT_FAILURE:
            return {...state,isLoad:false,isErr:true}
        case POST_PRODUCT_SUCCESS:
            return {...state,isLoad:false,products:[...state.products,payload]}
         case DELETE_PRODUCT_SUCCESS:
            return {...state,isLoad:false,products:state.products.filter((el)=>el.id!==payload)}               
        default:
            return state;
    }
}