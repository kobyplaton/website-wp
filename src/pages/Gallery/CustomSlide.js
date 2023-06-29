import { useWindowSize } from '@uidotdev/usehooks';
import React from 'react'

const useSlideSize = () => {
  const {width} = useWindowSize()

  if (width < 700) {
    return 350
  } else if (width > 1200) {
    return 500
  } else {
    return 400
  }
}

function CustomSlide({ slide }) {
  const {src, details, title, width, height, price} = slide;
  const size = useSlideSize()
  return (
    <div className='custom-slide'>
      <img src={src} width={size} height={size} />
      <div style={{color: 'white'}}>Title: {title}</div>
      <div style={{color: 'white'}}>Width: {width}</div>
      <div style={{color: 'white'}}>Height: {height}</div>
      <div style={{color: 'white'}}>Price Approximation: {price}</div>
      <div style={{color: 'white'}}>Extra Details: {details}</div>
    </div>
  )
}

export default CustomSlide