import React from 'react'

const Cart = ({title, price, image}) => {
  return (
    <div className='card'>
      <img src={image} width="200" height="200 "alt="image" />
        <h2>Title:{title}</h2>
        <h3>Price:{price}</h3>
        <button>Add To cart</button>
    </div>
  )
}

export default Cart;