import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'
import '../styles/Hero.css'
import img from '../styles/images/TradeMark ™.png'

function Hero({ text = '', heading, subheading = '' }) {

  const size = useWindowSize()

  const standardImageSize = 600;
  const smallerImageSize = window.innerWidth - 50;
  const standardFont = '48px';
  const smallerFont = '32px';

  const getHeroSize = () => {
    return size.width > standardImageSize ? standardImageSize : smallerImageSize
  }

  const getSubHeroSize = () => {
    return size.width > 600 ? standardFont : smallerFont;
  }

  return (
    <div className="hero-container my-5">
      {/* <div className={`hero ${size.width > 1200 ? classesBig : classesSmall}`}>
        <span className='hero-1'>Print </span>
        <span className='hero-2'>On </span>
        <span className='hero-3'>Your </span>
        <span className='hero-4'>Wall™</span>
      </div> */}
      <div className="trademark">
        <img className='hero-img' width={getHeroSize()} src={img} alt="Printonyourwall™" />
        <div className="trademark-text">is a Registered Portuguese Trade Mark 699676 </div>
      </div>
      <div className="subhero" style={{fontSize: getSubHeroSize()}}>"You dream it and We'll print it"</div>
    </div>
  )
}

export default Hero