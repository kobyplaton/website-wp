import React, { useRef } from 'react'
import Nav from './NavBar/Nav'
import '../styles/Page.css'
import Hero from '../pages/Hero'
import { NavContext } from '../context/NavContext'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Bkgs.css'

function Page({ children, hero }) {

  const contactUsRef = useRef();
  const faqRef = useRef();
  const aboutUsRef = useRef();
  const messageUsRef = useRef();


  return (
    <NavContext.Provider value={{contactUsRef, faqRef, aboutUsRef, messageUsRef}}>
      <Container className='mx-0 mw-100'>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Col 
          sm={{span: 1}} 
          md={{span: 3}}
          xl={{span: 2}}
          ></Col>
          <Col 
          sm={{span: 10}} 
          md={{span: 6}}
          xl={{span: 8}}
          >
            <Hero text={hero}  />
          </Col>
          <Col 
          sm={{span: 1}} 
          md={{span:3}}
          xl={{span: 2}}
          ></Col>
        </Row>
        <Row className='flex'>
            {children}
        </Row>
      </Container>
    </NavContext.Provider>
  )
}

export default Page