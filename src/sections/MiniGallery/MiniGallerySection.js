import React from 'react'
import MiniGallery from './MiniGallery'
import PageText from '../../components/PageText'
import Section from '../../components/Section'
import { useTranslation } from 'react-i18next'

function MiniGallerySection() {
    const {t} = useTranslation('common')
  return (
    <Section>
        <PageText heading={t('Home.MiniGallery')}>
            <MiniGallery />
        </PageText>
    </Section>
  )
}

export default MiniGallerySection