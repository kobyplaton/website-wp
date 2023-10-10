import React from 'react'
import img from '../styles/images/TradeMark ™ White.png'
import logo from '../styles/images/logo.png'
import '../styles/ContactFormLicensing.css'
import { useWindowSize } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'

const useImageSize = () => {
  const {width} = useWindowSize();

  if (width < 600) {
    return 350
  } else {
    return 500
  }
}

function ContactFormLicensing() {

  const {t} = useTranslation('common')

  const imgWidth = useImageSize()
  return (
    <div className='licensing'>
        <div className="trademark-content">
            <img className='trademark-img' src={img} alt="Printonyourwall™" width={imgWidth} />
            <div className="trademark-text">{t('Home.Hero.trademark')}</div>
            <div className="trademark-text">{t('Home.Licensing.owner')}</div>
        </div>
        <div className="card-info">
            <img src={logo} alt="logo" width={200} />
            <div>{t('Home.Licensing.name')}</div>
            <div>{t('Home.Licensing.address')}</div>
            <div className="">{t('Home.Licensing.postalCode')}</div>
            <a href="tel:+351 935 928 585">+351 935 928 585</a>
        </div>
    </div>
  )
}

export default ContactFormLicensing