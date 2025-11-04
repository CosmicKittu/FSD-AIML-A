import React from 'react'
import { useState } from 'react';

const Cart = ({title, price, image, update}) => {
  // const [count, setCount]= useState

  return (
    <div className='card'>
      <img src={image} width="200" height="200 "alt="image" />
        <h2>Title:{title}</h2>
        <h3>Price:{price}</h3>
        <button onClick={()=>{
          update((i)=>i+1)
        }}>Add To cart</button>
    </div>
  )
}

export default Cart;