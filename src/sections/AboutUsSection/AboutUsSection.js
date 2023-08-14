import React, { useContext } from 'react'
import Section from '../../components/Section'
import PageText from '../../components/PageText'
import { NavContext } from '../../context/NavContext'
import { Button, Col, Row } from 'react-bootstrap'
import img from './parrot-with-white-background-removebg2.jpg'
import { AiOutlineNumber } from 'react-icons/ai'
import { useWindowSize } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'
import '../../styles/AboutUs.css'
import { useNavigate } from 'react-router-dom'
import TextDivider from '../../components/TextDivider'

const useImageSize = () => {

  const {width} = useWindowSize()
  if (width > 700) {
    return {width: 350, height: 550, windowWidth: width}
  } else {
    return {width: 250, height: 400}
  }
}

const InputIcon = () => {
  const size = useWindowSize()
  if (size.width > 700) {
    return <AiOutlineNumber style={{margin: '0 10px 10px 0', color:"blue"}} size={50} />
  }
}


function AboutUsSection({dark = false}) {

  const {t} = useTranslation('common')

  const {width, height, windowWidth} = useImageSize()
  const {aboutUsRef} = useContext(NavContext)
  const navigate = useNavigate()

  return (
    <Section dark={dark} sectionRef={aboutUsRef} >
        <PageText heading={t("Home.AboutUs.heading")}>
            <Row>
              <Col >
                <p className='about-us-text'>
                  {t("Home.AboutUs.section1")}
                </p>
                <TextDivider />
                  {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section2")}
                </p>
                <TextDivider />
                  {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section3")}
                </p>
                <TextDivider />
                  {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section4")}
                </p>
                <TextDivider />
                {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section5")}
                </p>
              </Col>
              {windowWidth > 1200 &&
              <Col>
                <img width={width} height={height} src={img} alt=''></img>
              </Col>
              }
            </Row>
              <Button style={{margin: "60px 0 20px 0"}} size='md' onClick={() => navigate('/become-our-client')}>{t('Home.Hero.button')}</Button>
            </PageText> 
    </Section>
  )
}


export default AboutUsSection