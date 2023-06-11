import React from 'react'
import Section from '../components/Section'
import ContactUs from '../pages/ContactUs'

function ContactUsSection({dark = false}) {
  return (
    <Section dark={dark}>
        <ContactUs />
    </Section>
  )
}

export default ContactUsSection