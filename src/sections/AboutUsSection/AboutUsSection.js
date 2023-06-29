import React, { useContext } from 'react'
import Section from '../../components/Section'
import PageText from '../../components/PageText'
import { NavContext } from '../../context/NavContext'
import { Col, Container, Row } from 'react-bootstrap'
import img from './img2.jpg'
import { AiOutlineNumber } from 'react-icons/ai'
import { useWindowSize } from '@uidotdev/usehooks'

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

  const {width, height, windowWidth} = useImageSize()
  const {aboutUsRef} = useContext(NavContext)

  return (
    <Section dark={dark} sectionRef={aboutUsRef} >
        <PageText heading='About Us'>
          {/* <Container> */}
            <Row>
              {/* <Col></Col> */}
              <Col >
                <div className='text-align-start'>
                  <InputIcon />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quisquam autem tempora in illo omnis eum voluptates? Aperiam, tenetur dolores.
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit.</li>
                  </ul>
                </div>
                <p className='text-align-start'>
                  <InputIcon />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt recusandae facere asperiores voluptas eaque debitis accusamus magni ducimus? Incidunt maxime eaque id tempora ratione debitis praesentium, modi aspernatur? Maiores.
                </p>
                <p className='text-align-start'>
                  <InputIcon />
                 ccusamus magni ducimus? Incidunt maxime eaque id tempora ratione debitis praesentium, modi aspernatur? Maiores.
                </p>
              </Col>
              {windowWidth > 1200 &&
              <Col>
                <img width={width} height={height} src={img}></img>
              </Col>
              }
            </Row>
          {/* </Container> */}
            </PageText> 
    </Section>
  )
}


export default AboutUsSection