import React, { useEffect } from 'react'
import Page from '../components/Page'
import '../styles/Home.css'
import Divider from '../components/Divider'
import HeroSection from '../sections/HeroSection'
import FaqSection from '../sections/FaqSection'
import AboutUsSection from '../sections/AboutUsSection/AboutUsSection'
import ContactUsSection from '../sections/ContactUsSection'
import ContactForm from '../sections/ContactForm'
import { useTranslation } from 'react-i18next'
import { Col } from 'react-bootstrap'
import WallPrintingSection from '../sections/WallPrintingSection'

function Home() {

  const {t, i18n} = useTranslation('common')

  return (
    <div className='w-100'>
        <Page hero={t('Home.heading')}>
          <Col
          sm={{span: 1}} 
          md={{span: 3}}
          xl={{span: 2}}
          ></Col>
          <Col
          sm={{span: 10}} 
          md={{span: 6}} 
          xl={{span: 8}}
         className='px-0'
          >
            <HeroSection />
            <Divider />
            <FaqSection />
            <ContactUsSection dark />
            <AboutUsSection />
            <WallPrintingSection />
          </Col>
          <Col
          sm={{span: 1}}
          md={{span: 3}}
          xl={{span: 2}}
          ></Col>
          <ContactForm black />
        </Page>
    </div>
  )
}

export default Home