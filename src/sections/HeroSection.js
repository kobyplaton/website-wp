import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import { useTranslation } from 'react-i18next'
import '../styles/Bkgs.css'
import { useWindowSize } from '@uidotdev/usehooks'
import { WistiaPlayer, WistiaProvider } from '@wistia/react-embeds'

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
    return sizes;
}

function HeroSection({ dark = false }) {
  const {t} = useTranslation('common')
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
          <WistiaProvider>
            <WistiaPlayer
              hashedId="vxdbroqsmr"
              videoFoam={false}
              style={{
                width: '640px',
                height: '360px',
              }}
            ></WistiaPlayer>
          </WistiaProvider>
          <p style={{textAlign: 'center', marginTop: '30px',fontSize: '1.5rem', fontWeight: '300', color: 'red'}}>{t('Home.Hero.message')}</p>
      </Section>
    </div>
  )
}

export default HeroSection