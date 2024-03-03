import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addProduct, editProduct, getProduct } from '../redux/ProductReducer/action'
import { useNavigate, useParams } from 'react-router-dom'
const initialData={
    title:"",
    image:"",
    brand:"",
    price:"",
    discount:"",
    gender:""
}
export const EditProduct = () => {
    const [data,setData]=useState(initialData)
    const [edit,setedit]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const product=useSelector((store)=>store.productReducer.products )
   const {id}=useParams()
   
  const handelChange=(e)=>{
    const {name,value}=e.target
 setData((prev)=>{
    return {...prev,[name]:value}})
  }
  const handelSubmit=()=>{
  dispatch(editProduct(data,id)).then(()=>{
setedit(true)
  navigate("/admin")

  })
    setData(initialData)
  }

  useEffect(()=>{
    dispatch(getProduct)
    let mydata=product.find((el)=>el.id===id)
    if(mydata){
        setData(mydata)
    }
   },[])
  return (
    <>

    <DIV>
        <h1>Edit Product:{id}</h1>
        <p>{edit?"Edit Product SuccessFully":""}</p>
        <input placeholder="Enter Product Name" onChange={handelChange}  value={data.title} type="text"  name="title" />
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
        <button onClick={handelSubmit}>Edit Product</button>
       
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
p{
    color: #03c703; 
}
`