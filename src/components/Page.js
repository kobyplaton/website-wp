import React, { useRef } from 'react'
import Nav from './NavBar/Nav'
import '../styles/Page.css'
import Hero from '../pages/Hero'
import { NavContext } from '../context/NavContext'

function Page({ children, hero }) {

  const contactUsRef = useRef();
  const faqRef = useRef();
  const aboutUsRef = useRef();
  const messageUsRef = useRef();

  return (
    <NavContext.Provider value={{contactUsRef, faqRef, aboutUsRef, messageUsRef}}>
      <div className='page'>
          <Nav />
          <Hero text={hero} />
          {children}
      </div>
    </NavContext.Provider>
  )
}

export default Page