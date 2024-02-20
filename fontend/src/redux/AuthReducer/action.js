// const LOGIN_FAILURE="LOGIN_FAILUER"
// const LOGIN_REQUEST="LOGIN_REQUEST"
// const LOGIN_SUCCESS="LOGIN_SUCCESS"

export const LoginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}
export const LoginSuccessAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
export const LoginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}