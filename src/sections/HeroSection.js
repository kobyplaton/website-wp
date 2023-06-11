import React, { useContext } from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import ReactPlayer from 'react-player'
import Button from '../components/Button'
import Divider from '../components/Divider'
import Hero from '../pages/Hero'
import { NavContext } from '../context/NavContext'
import { useTranslation } from 'react-i18next'
// import Button from 'react-bootstrap/Button'

function HeroSection({ dark = false }) {
    const {t, i18n} = useTranslation('common')
  return (
    <Section dark={dark}>
        {/* <Hero text={'We print on your walls'} /> */}
        <PageText heading={t('Home.Hero.heading')}>This video shows how we create our designs and bring them to your wall!</PageText>
        <ReactPlayer width={250} height={150} url="https://www.youtube.com/watch?v=dSFQRsKCmRw&pp=ygUbcHJpbnQgb24geW91ciB3YWxsIHRyYWlubGVy" />
        <Button url={'/order'}>Get Started</Button>
    </Section>
  )
}

export default HeroSection