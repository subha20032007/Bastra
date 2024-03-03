import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const initialState={
    auth:false,
    token:"",
    isLoad:false,
    isErr:false
}


export const reducer=(state=initialState,{type,payload})=>{
   switch(type){
    case LOGIN_REQUEST:
        return {...state,isLoad:true}
    case LOGIN_FAILURE:
        return {...state,isLoad:false,isErr:true}
    case LOGIN_SUCCESS:
        return {...state,isLoad:false,isAuth:true,token:payload}
    default :
    return state;
   }
}