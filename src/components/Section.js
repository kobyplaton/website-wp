import React from 'react'
import '../styles/Section.css'
import { Container } from 'react-bootstrap'

function Section({ children, dark = false, black = false, sectionRef, additionalClasses }) {

  const sectionClasses = `mt-3 d-flex flex-column justify-content-center align-items-center ${black && 'text-white'}`

  return (
    <Container
     ref={sectionRef} className={`${sectionClasses} ${dark ? 'dark' : 'light'} ${black ? 'black' : ''} ${additionalClasses}`}>
        {children}
    </Container>
  )
}

export default Section