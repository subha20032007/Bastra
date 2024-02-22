import React, { useEffect } from 'react'
import { AdminProductCard } from '../components/AdminProductCard'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../redux/ProductReducer/action'
import styled from 'styled-components'
import { Sidebar } from '../components/Sidebar'

export const Admin = () => {
    const dispatch=useDispatch()
const {product,err,load}=useSelector((store)=>{
    return{product:store.productReducer.products,err:store.productReducer.isErr,load:store.productReducer.isLoad}
},shallowEqual)
const handelDelete=(id)=>{
dispatch(deleteProduct(id))
}
useEffect(()=>{
dispatch(getProduct)
},[])

  return (
    <DIV>
        <Sidebar/>
        <div className='product_list'>
        {product.map((el)=>(
       <AdminProductCard product={el}
       handelDelete={handelDelete}
       />
        ))
        }
        </div>
    </DIV>
  )
}
const DIV=styled.div`
display: flex;
margin:auto;
.product_list{
display: grid;
width:70%;
grid-template-columns:repeat(4,1fr);
grid-gap: 10px;
margin: auto;
margin-top: 20px;
}
`