import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
const Links=[
    {path:"/",el:"Home"},
    {path:"/login",el:"Login"},
    {path:"/register",el:"Register"},
]
export const Navbar = () => {
  return (
    <DIV>
       {
        Links.map((el)=>(
            <Link to={el.path}>{el.el}</Link>
        ))
       }
    </DIV>
  )
}
const DIV=styled.div`
    display: flex;
    justify-content: space-around;
`
