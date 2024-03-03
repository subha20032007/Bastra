import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../redux/AuthReducer/action'
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom'
export const Login = () => {
  const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const location=useLocation()
  const navigate=useNavigate()
  const isAuth=useSelector((store)=>store.authReducer.isAuth)
  const handelLogin=()=>{
    const payload={
      email,password
    }
       dispatch(LoginUser(payload))
       setEmail("eve.holt@reqres.in")
       setPassword("")
       
  }
  console.log(isAuth)
//  if(isAuth){
//   //console.log(location.pathname)
//   navigate(location.pathname)
//  }
//1234
  return (
    <DIV>
        <h1>LOG IN</h1>
       { isAuth?<p>Login Successfull!!</p>:""}
   <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email'/>
   <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Email' />
   <button onClick={handelLogin}>Login</button>
    </DIV>
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
p{
  color:#00d848
}
`