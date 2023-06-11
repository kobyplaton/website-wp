import React, { useEffect } from 'react'
import Page from '../components/Page'
import '../styles/Home.css'
import Divider from '../components/Divider'
import HeroSection from '../sections/HeroSection'
import FaqSection from '../sections/FaqSection'
import AboutUsSection from '../sections/AboutUsSection'
import ContactUsSection from '../sections/ContactUsSection'
import ContactForm from '../sections/ContactForm'
import Album from './Gallery/Album'
import { useTranslation } from 'react-i18next'

function Home() {

  const {t, i18n} = useTranslation('common')

  return (
    <div>
        <Page hero={t('Home.heading')}>
          <Album />
          <HeroSection />
          <Divider />
          <FaqSection />
          <ContactUsSection dark />
          <AboutUsSection />
          <ContactForm black />
        </Page>
    </div>
  )
}

export default Home