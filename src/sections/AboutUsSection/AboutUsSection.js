import React, { useContext } from 'react'
import Section from '../../components/Section'
import PageText from '../../components/PageText'
import { NavContext } from '../../context/NavContext'
import { Col, Row } from 'react-bootstrap'
import img from './img2.jpg'
import { AiOutlineNumber } from 'react-icons/ai'
import { useWindowSize } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'

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
          {/* <Container> */}
            <Row>
              {/* <Col></Col> */}
              <Col >
                <div className='text-align-start'>
                  <InputIcon />
                  {t("Home.AboutUs.section1.text")}
                  {/* <ul>
                    <li>{t("Home.AboutUs.section1.bullet1")}</li>
                    <li>{t("Home.AboutUs.section1.bullet2")}</li>
                    <li>{t("Home.AboutUs.section1.bullet3")}</li>
                    <li>{t("Home.AboutUs.section1.bullet4")}</li>
                  </ul> */}
                </div>
                <p className='text-align-start'>
                  <InputIcon />
                  {t("Home.AboutUs.section2")}
                </p>
                <p className='text-align-start'>
                  <InputIcon />
                  {t("Home.AboutUs.section3")}
                </p>
              </Col>
              {windowWidth > 1200 &&
              <Col>
                <img width={width} height={height} src={img} alt=''></img>
              </Col>
              }
            </Row>
            
         {/* </Container> */}
            </PageText> 
    </Section>
  )
}


export default AboutUsSection