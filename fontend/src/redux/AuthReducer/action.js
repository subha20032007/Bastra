// const LOGIN_FAILURE="LOGIN_FAILUER"
// const LOGIN_REQUEST="LOGIN_REQUEST"
// const LOGIN_SUCCESS="LOGIN_SUCCESS"

import axios from "axios"

export const LoginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}
export const LoginSuccessAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
export const LoginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}
export const Login=(payload)=>(dispatch)=>{
    dispatch(LoginRequestAction())
    axios.post(`https://reqres.in/api/login`,payload)
    .then((res)=>{
       console.log(res.data.token)
       dispatch(LoginSuccessAction(req.data.token))
    }).catch((err)=>{
        console.log(err)
        dispatch(LoginFailureAction())
    })
}