import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addProduct } from '../redux/ProductReducer/action'
const initialData={
    title:"",
    image:"",
    brand:"",
    price:"",
    discount:"",
    gender:""
}
export const AddProduct = () => {
  const [data,setData]=useState(initialData)
  const dispatch=useDispatch()
  const handelChange=(e)=>{
    const {name,value}=e.target
 setData((prev)=>{
    return {...prev,[name]:value}})
  }
  const handelSubmit=()=>{
  dispatch(addProduct(data))
    setData(initialData)
  }
  return (
    <>

    <DIV>
        <h1>Add Product</h1>
        <input placeholder="Enter Product Name" onChange={handelChange}  type="text" value={data.title} name="title" />
        <input placeholder="Enter Product Image" onChange={handelChange} value={data.image} name="image" type="url" />
        <input placeholder="Enter Product Brand" onChange={handelChange} value={data.brand} name="brand" type="text" />
        <input placeholder="Enter Product Price" onChange={handelChange} value={data.price} name="price" type="number" />
        <input placeholder="Enter Product Discount" onChange={handelChange} value={data.discount} name="discount" type="number" />
<select name="gender" id="" value={data.gender} onChange={handelChange}>
    <option value="">Select Gender</option>
    <option value="men">Men</option>
    <option value="women">Women</option>
    <option value="kids">Kids</option>
</select>
        <button onClick={handelSubmit}>Register</button>
       
    </DIV>
    </>
  )
}
const DIV=styled.div`
display: flex;
flex-direction: column;
margin: auto;
padding: 2%;
height:400px;
width:400px;
border:2px solid #c70396;
justify-content: space-around;
margin-top:30px ;
input{
  height:30px;

}

button{
  height:30px;
  background-color: #c70396;
  color:white;
  border:0px
}
select{
  height:30px;

}
h1{
  color: #c70396;
}
`