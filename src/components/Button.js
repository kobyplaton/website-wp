import React from 'react'
import '../styles/Button.css'
import { useNavigate } from 'react-router-dom'

function Button({url}) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(url)} className='button-main'>Get Started</div>
  )
}

export default Button