import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'
import '../styles/Hero.css'

function Hero({ text = '', heading, subheading = '' }) {

  const size = useWindowSize()

  const classesBig = 'my-5 py-5 largest-font'
  const classesSmall = 'mt-5'

  return (
    <div className='mb-5'>
      <div className={`hero ${size.width > 1200 ? classesBig : classesSmall}`}>
        <span className='hero-1'>Print </span>
        <span className='hero-2'>On </span>
        <span className='hero-3'>Your </span>
        <span className='hero-4'>Wall™</span>
      </div>
      <div className="subhero">You dream it, We print it</div>
    </div>
  )
}

export default Hero