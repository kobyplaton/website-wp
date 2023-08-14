import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import ReactPlayer from 'react-player/youtube'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import '../styles/Bkgs.css'
import { useWindowSize } from '@uidotdev/usehooks'

const videoSize = {
  medium: {
    width: 600,
    height: 300
  },
  small: {
    width: 250,
    height: 150
  },
  big: {
    width: 900,
    height: 500
  }
}

const buttonSmall = { margin: '3rem', width: '135px' }
const buttonMedium = { margin: '3rem', width: '145px' }
const buttonBig = { margin: '3rem', width: '155px' }

const chooseSize = (width) => {
  let sizes;
  
    if (width < 700) {
      sizes = { button: buttonSmall, videoSize: videoSize.small }
    } else if (width < 1500) {
      sizes = { button: buttonMedium, videoSize: videoSize.medium}
    } else {
      sizes = { button: buttonBig, videoSize: videoSize.big }
    }
    console.log(sizes)
    return sizes;
}

function HeroSection({ dark = false }) {
  const {t} = useTranslation('common')
  const navigate = useNavigate()
  const {width} = useWindowSize()
  const [sizes, setSizes] = useState(chooseSize(500))

  useEffect(() => {
    setSizes(chooseSize(width))
  }, [width])
  return (
    <div className='hero-section'>
      <Section dark={dark}>
          <PageText heading={t('Home.Hero.heading')}>
          </PageText>
          <ReactPlayer style={{marginBottom: "60px"}} controls={true} width={sizes.videoSize.width} height={sizes.videoSize.height} url="https://youtu.be/10qAcj74MjY" />
      </Section>
    </div>
  )
}

export default HeroSection