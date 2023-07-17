import React, { useContext } from 'react'
import Section from '../../components/Section'
import PageText from '../../components/PageText'
import { NavContext } from '../../context/NavContext'
import { Col, Row } from 'react-bootstrap'
import img from './parrot-with-white-background-removebg2.png'
import { AiOutlineNumber } from 'react-icons/ai'
import { useWindowSize } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'
import '../../styles/AboutUs.css'

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
    return <AiOutlineNumber style={{margin: '0 10px 10px 0', color:"turquoise"}} size={50} />
  }
}


function AboutUsSection({dark = false}) {

  const {t} = useTranslation('common')

  const {width, height, windowWidth} = useImageSize()
  const {aboutUsRef} = useContext(NavContext)

  return (
    <Section dark={dark} sectionRef={aboutUsRef} >
        <PageText heading={t("Home.AboutUs.heading")}>
            <Row>
              <Col >
                <p className='about-us-text'>
                  {t("Home.AboutUs.section1")}
                </p>
                <div className="text-divider"></div>
                  {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section2")}
                </p>
                <div className="text-divider"></div>
                  {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section3")}
                </p>
                <div className="text-divider"></div>
                  {/* <InputIcon /> */}
                <p className='about-us-text'>
                  {t("Home.AboutUs.section4")}
                </p>
                <div className="text-divider"></div>
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
            </PageText> 
    </Section>
  )
}


export default AboutUsSection