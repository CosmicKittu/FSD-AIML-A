import React from 'react'

const Header = ({cart}) => {
  return (
    <div className='header'>
        <h1>simple Cart app</h1>
        <h1>{cart}</h1>
    </div>
  )
}

export default Header;