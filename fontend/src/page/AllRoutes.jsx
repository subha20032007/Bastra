import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import styled from 'styled-components'
export const AllRoutes = () => {
  return (
    <DIV>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </DIV>
  )
}
const DIV=styled.div`
  margin:"auto";
`