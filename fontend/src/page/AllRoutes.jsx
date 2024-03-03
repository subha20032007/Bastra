import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import {AddProduct} from "./AddProduct"
import styled from 'styled-components'
import { Admin } from './Admin'
import { EditProduct } from './EditProduct'
export const AllRoutes = () => {
  return (
    <DIV>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
      </Routes>
    </DIV>
  )
}
const DIV=styled.div`
  margin:"auto";
`