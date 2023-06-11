import React, { useState } from 'react'
import Section from '../../components/Section'
import { generateCustomerKey, uploadKeyToDb } from '../Order/keyLogick'

function GenerateKeySection() {

    const [customerKey, setCustomerKey] = useState()

  return (
    <Section>
        <button onClick={() => generateCustomerKey(setCustomerKey)}>Generate Customer Key</button>
        <div>Customer key: {customerKey}</div>
        <button onClick={() => uploadKeyToDb(customerKey)}>Confirm key</button>
    </Section>
  )
}

export default GenerateKeySection