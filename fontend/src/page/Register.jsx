import React, { useState } from 'react'
import styled from 'styled-components'

export const Register = () => {
  const [data,setData]=useState({name:"",age:"",email:"",pass:""})

  const handelChange=(e)=>{
    const {name,value}=e.target
      const newData={...data,[name]:value}
      setData(newData)
  }
  const handelSubmit=()=>{
   console.log(data)
    setData({name:"",age:"",email:"",pass:""})
  }
  return (
    <>

    <DIV>
        <h1>Register Page</h1>
        <input placeholder="Enter Your Name" onChange={handelChange}  type="text" value={data.name} name="name"/>
        <input placeholder="Enter Your Age" onChange={handelChange} value={data.age} name="age" type="number" />
        <input placeholder="Enter Your Email" onChange={handelChange} value={data.email} name="email" type="email" />
        <input placeholder="Enter Your Password" onChange={handelChange} value={data.pass} name="pass" type="password" />
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
h1{
  color: #c70396;
}
`