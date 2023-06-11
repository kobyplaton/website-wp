import React from 'react'

function CustomSlide({ slide }) {
  const {src, details, title, width, height, price} = slide;
  return (
    <div className='custom-slide'>
      <img src={src} width={350} height={350} />
      <div style={{color: 'white'}}>Title: {title}</div>
      <div style={{color: 'white'}}>Width: {width}</div>
      <div style={{color: 'white'}}>Height: {height}</div>
      <div style={{color: 'white'}}>Price: {price}</div>
      <div style={{color: 'white'}}>Extra Details: {details}</div>
    </div>
  )
}

export default CustomSlide