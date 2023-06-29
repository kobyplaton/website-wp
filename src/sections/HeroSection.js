import React, { useContext } from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import ReactPlayer from 'react-player'
// import Button from '../components/Button'
import Divider from '../components/Divider'
import Hero from '../pages/Hero'
import { NavContext } from '../context/NavContext'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import '../styles/Bkgs.css'
import { useWindowSize } from '@uidotdev/usehooks'

const videoSize = {
  big: {
    width: 600,
    height: 300
  },
  small: {
    width: 250,
    height: 150
  }
}

const buttonSmall = 'my-5 w-35'
const buttonBig = 'my-5 w-45'

function HeroSection({ dark = false }) {
    const {t, i18n} = useTranslation('common')
    const navigate = useNavigate()
    const size = useWindowSize()
  return (
    <Section dark={dark}>
        <PageText heading={t('Home.Hero.heading')}>This video shows how we create our designs and bring them to your wall!</PageText>
        <ReactPlayer width={size.width > 700 ? videoSize.big.width : videoSize.small.width} height={size.width > 700 ? videoSize.big.height : videoSize.small.height} url="https://www.youtube.com/watch?v=dSFQRsKCmRw&pp=ygUbcHJpbnQgb24geW91ciB3YWxsIHRyYWlubGVy" />
        <Button className={size.width > 700 ? buttonBig : buttonSmall} size='md' onClick={() => navigate('/order')}>Get Started</Button>
    </Section>
  )
}

export default HeroSection