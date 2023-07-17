import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'
import '../styles/Hero.css'
import img from '../styles/images/TradeMark ™.png'

function Hero({ text = '', heading, subheading = '' }) {

  const size = useWindowSize()

  const classesBig = 'my-5 py-5 largest-font'
  const classesSmall = 'mt-5'

  return (
    <div className="hero-container my-5">
      {/* <div className={`hero ${size.width > 1200 ? classesBig : classesSmall}`}>
        <span className='hero-1'>Print </span>
        <span className='hero-2'>On </span>
        <span className='hero-3'>Your </span>
        <span className='hero-4'>Wall™</span>
      </div> */}
      <div className="trademark">
        <img className='hero-img' src={img} alt="Printonyourwall™" srcset="" />
        <div className="trademark-text">is a Registered Portuguese Trade Mark #699676 </div>
      </div>
      <div className="subhero">You dream it, We print it</div>
    </div>
  )
}

export default Hero