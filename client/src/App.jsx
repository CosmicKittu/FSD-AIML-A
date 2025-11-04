import React from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import { useState, useEffect } from 'react'

const App = () => {
  // const items = [
  //   {Image:"", title:'laptop', price:'100'},
  //   {Image:"", title:'lapt', price:'100'},
  //   {Image:"", title:'laptop bag', price:'100'}
  // ]
  const [items, setItems] =useState([])
  const [cart, setcart] =useState(0)
  useEffect(()=>{
     async function fdata(){
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setItems(data);
     } 
    fdata();
  },[])

  return (
    <div>
      <Header cart={cart}/>
      <div className='container'>
        {items.map((t, i)=>(
        
        <Cart key={i} title ={t.title} price={t.price} image={t.image} update={setcart}/>
      ))}
      </div>
      

    </div>
  )
}

export default App