import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'
import '../styles/Hero.css'
import img from '../styles/images/TradeMark ™.png'
import { useTranslation } from 'react-i18next'

function Hero({ text = '', heading, subheading = '' }) {

  const size = useWindowSize()

  const {t} = useTranslation('common')

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
      <div className="trademark">
        <img className='hero-img' width={getHeroSize()} src={img} alt="Printonyourwall™" />
        <div className="trademark-text">{t('Home.Hero.trademark')}</div>
      </div>
      <div className="subhero" style={{fontSize: getSubHeroSize()}}>{t('Home.Hero.slogan')}</div>
    </div>
  )
}

export default Hero