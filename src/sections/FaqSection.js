import React from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import Faq from '../pages/Faq/Faq'
import { useTranslation } from 'react-i18next'

function FaqSection({dark = false}) {

  const {t} = useTranslation('common')
  return (
    <Section dark={dark}>
        <PageText heading={t("Faq.heading")}>
        </PageText>
        <Faq />
    </Section>
  )
}

export default FaqSection