import React from 'react'
import './style.css'
const Button = ({click}) => {
  return (
    <div className='button' onClick={click}>Add to cart</div>
  )
}

export default Button