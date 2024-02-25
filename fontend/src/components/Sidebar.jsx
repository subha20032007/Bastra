import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = () => {
    const [category,setCategory]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
  const handelChange=(e)=>{
    let allCategory=[...category]
   const value=e.target.value
   if(allCategory.includes(value)){
    allCategory=allCategory.filter((el)=>el!==value)
   }else{
    allCategory.push(value)
   }
   setCategory(allCategory)
   console.log(category)
  }
  useEffect(()=>{
    const params={
        category
    }
  setSearchParams(params)
  },[category])
  return (
    <DIV>
        <div>
            <h3>Filter By</h3>
<input type="checkbox"
 value={"men"} 
 onChange={handelChange}
 />
<label>Men</label><br />
<input type="checkbox"
 value={"women"} 
 onChange={handelChange}
 />
<label>Women</label><br/>
<input type="checkbox"
 value={"kids"}
 onChange={handelChange}
 />
  <label>Kids</label>
</div>

<div>
    <h3>Sort By Price</h3>
<input type="radio" value={"asc"}/><label>Ascending</label>
<input type="radio" value={"desc"}/><label>Decending</label>
</div>

    </DIV>
  )
}
const DIV=styled.div`
margin-top:20px;
width:20%;
border:1px solid #2edddd;
`