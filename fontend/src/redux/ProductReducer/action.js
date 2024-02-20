// export const PRODUCT_REQUEST="PRODUCT_REQUEST"
// export const PRODUCT_FAILURE="PRODUCT_FAILURE"
// export const GET_PRODUCT_SUCCESS="GET_PRODUCT_SUCCESS"
// export const POST_PRODUCT_SUCCESS="POST_PRODUCT_SUCCESS"
// export const DELETE_PRODUCT_SUCCESS="DELETE_PRODUCT_SUCCESS"

import { PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"
import axios from "axios"
export const ProductRequestAction=()=>{
    return {type:PRODUCT_REQUEST}
}

export const GetProductSuccessAction=(payload)=>{
    return {type:PRODUCT_REQUEST,payload}
}

export const ProductFailreAction=()=>{
    return {type:PRODUCT_REQUEST}
}
export const PostProductSuccessAction=(payload)=>{
    return {type:PRODUCT_REQUEST,payload}
}

export const DeleteProductSuccessAction=(payload)=>{
    return {type:PRODUCT_REQUEST,payload}
}

export const getProduct=()=>{

    axios
}