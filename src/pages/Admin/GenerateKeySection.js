import React, { useState } from 'react'
import Section from '../../components/Section'
import { generateCustomerKey, uploadKeyToDb } from '../Order/keyLogick'
import { Button } from 'react-bootstrap'

function GenerateKeySection() {

    const [customerKey, setCustomerKey] = useState()

  return (
    <Section>
      <div className='d-flex flex-column'>
        <Button className='mb-3' onClick={() => generateCustomerKey(setCustomerKey)}>Generate Customer Key</Button>
        <div className='mb-3'>Customer key: {customerKey}</div>
        <Button className='mb-3' onClick={() => uploadKeyToDb(customerKey)}>Confirm key</Button>
      </div>
    </Section>
  )
}

export default GenerateKeySection