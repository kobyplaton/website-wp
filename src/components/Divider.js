import React from 'react'
import '../styles/Divider.css'
import Section from './Section'

function Divider({ invisible = false } ) {
  return (
    <Section>
      <div className={`divider ${invisible && 'invisible'}`}></div>
    </Section>
  )
}

export default Divider