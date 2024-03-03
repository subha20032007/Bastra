// const LOGIN_FAILURE="LOGIN_FAILUER"
// const LOGIN_REQUEST="LOGIN_REQUEST"
// const LOGIN_SUCCESS="LOGIN_SUCCESS"

import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const LoginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}
export const LoginSuccessAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
export const LoginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}
export const LoginUser=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(LoginRequestAction())
    axios.post(`https://reqres.in/api/login`,payload)
    .then((res)=>{
       console.log(res.data.token)
       dispatch(LoginSuccessAction(res.data.token))
    }).catch((err)=>{
        console.log(err)
        dispatch(LoginFailureAction())
    })
}