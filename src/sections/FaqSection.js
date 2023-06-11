import React from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import Faq from '../pages/Faq/Faq'
import Divider from '../components/Divider'

function FaqSection({dark = false}) {
  return (
    <Section dark={dark}>
        <PageText heading='Frequently Asked Questions'>
        </PageText>
        <Faq />
    </Section>
  )
}

export default FaqSection