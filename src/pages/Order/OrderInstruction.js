import React, { useState } from 'react'
import Page from '../../components/Page'
import Section from '../../components/Section'
import '../../styles/OrderInstruction.css'

import PageText from '../../components/PageText'
import { useTranslation } from 'react-i18next'
import Instructions from './Instructions'

function OrderInstruction() {

  const {t} = useTranslation('common')
  const [verified, setVerified] = useState()
  const [toggleVerifiedMsg, setToggleVerifiedMsg] = useState()

  return (
    <Page hero={t("Order.heading")}>
        <Section>
          <PageText heading={t("Order.heading")} textAlign='start'>
            <div className='instructions-list-container'>
              <Instructions />
            </div>
          </PageText>

            {toggleVerifiedMsg && 
            <div className="verification-msg mb-5">
              {verified 
                ? <p style={{color: 'green'}}>Verified!</p>
                : <p style={{color: 'orange'}}>Wrong Key, Check Capitalization</p>
              }
            </div>
            }
        </Section>
    </Page>
  )
}

export default OrderInstruction