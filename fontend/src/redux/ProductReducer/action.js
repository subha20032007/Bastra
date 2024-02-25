// export const PRODUCT_REQUEST="PRODUCT_REQUEST"
// export const PRODUCT_FAILURE="PRODUCT_FAILURE"
// export const GET_PRODUCT_SUCCESS="GET_PRODUCT_SUCCESS"
// export const POST_PRODUCT_SUCCESS="POST_PRODUCT_SUCCESS"
// export const DELETE_PRODUCT_SUCCESS="DELETE_PRODUCT_SUCCESS"

import { DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"
import axios from "axios"
export const ProductRequestAction=()=>{
    return {type:PRODUCT_REQUEST}
}

export const GetProductSuccessAction=(payload)=>{
    //console.log({payload})
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const ProductFailreAction=()=>{
    return {type:PRODUCT_FAILURE}
}
export const PostProductSuccessAction=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}
export const EditProductSuccessAction=(id,data)=>{
    return {type:EDIT_PRODUCT_SUCCESS,payload:{id,data}}
}
export const DeleteProductSuccessAction=(payload)=>{
    return {type:DELETE_PRODUCT_SUCCESS,payload}
}

export const getProduct=(paramObj)=>(dispatch)=>{
    dispatch(ProductRequestAction())
    console.log(paramObj)
    axios.get(`http://localhost:3001/products`,paramObj)
    .then((res)=>{
       // console.log(res.data,"***")
        dispatch(GetProductSuccessAction(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(ProductFailreAction())
    })
}
export const addProduct=(payload)=>(dispatch)=>{
    dispatch(ProductRequestAction())
      axios.post(`http://localhost:3001/products`,payload)
      .then((res)=>{
          dispatch(PostProductSuccessAction(res.data))
      }).catch((err)=>{
          console.log(err)
          dispatch(ProductFailreAction())
      })
  }
  export const deleteProduct=(payload)=>(dispatch)=>{
    dispatch(ProductRequestAction())
      axios.delete(`http://localhost:3001/products/${payload}`)
      .then((res)=>{
          dispatch(DeleteProductSuccessAction(payload))
      }).catch((err)=>{
          console.log(err)
          dispatch(ProductFailreAction())
      })
  }
  export const editProduct=(payload,id)=>(dispatch)=>{

    dispatch(ProductRequestAction())
      return axios.patch(`http://localhost:3001/products/${id}`,payload)
      .then((res)=>{
         dispatch(EditProductSuccessAction(id,payload))
        
      }).catch((err)=>{
          console.log(err)
          dispatch(ProductFailreAction())
      })
  }