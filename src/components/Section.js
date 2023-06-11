import React from 'react'
import '../styles/Section.css'

function Section({ children, dark = false, black = false, sectionRef }) {
  return (
    <div ref={sectionRef} className={`section ${dark ? 'dark' : 'light'} ${black ? 'black' : ''}`}>
        {children}
    </div>
  )
}

export default Section