import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AdminProductCard = ({product,handelDelete}) => {
   
//console.log(product,"000")
  return (
    <DIV>
        <div className='card_img'> <img src={product.image} alt={product.title}/></div>
        <h3>{product.title}</h3>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <button onClick={()=>{handelDelete(product.id)}} >Delete</button>
        <Link to={`/editproduct/${product.id}`}><button >Edit</button></Link>
    </DIV>
  )
}
const DIV=styled.div`
border:2px solid #00f8ae;


.card_img{
    width:90%;
 
    margin:auto;
    margin-top: 10px;
    border:2px solid #c70396;
}
img{
    width:100%;
}
`
