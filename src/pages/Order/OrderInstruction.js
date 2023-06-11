import React, { useRef, useState } from 'react'
import Page from '../../components/Page'
import Section from '../../components/Section'
import { getDbFile } from '../../firebase/firestore'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase_config'

import { createProcess, deleteKeyFromDb, verifyKey } from './keyLogick'
import { recieveProcessMail, sendProcessMailToUser } from './mailLogick'

function OrderInstruction() {

  const [validationMsg, setValidationMsg] = useState('')
  const [verified, setVerified] = useState()
  const [toggleVerifiedMsg, setToggleVerifiedMsg] = useState()
  const keyRef = useRef()
  const emailRef = useRef()
  const confirmEmailRef = useRef()
  const formRef = useRef()

  const templateParams = {
    message: "Request Verified, we will contact you soon!",
    // to_email: emailRef.current.value
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const key = keyRef.current.value;
    const email = emailRef.current.value;
    const repeatEmail = confirmEmailRef.current.value;

    if (key.length !== 14) {
      setValidationMsg('your key format is incorrect, check for white spaces')
    }
    else if (email.length === 0 || email !== repeatEmail) {
      setValidationMsg('your emails don\'t match')
    } 
    else {
        const verification = await verifyKey(key)
        setToggleVerifiedMsg(true)
        if (!verification) {
          setVerified(false)
        } else {
          setVerified(true)
          setValidationMsg("Wait please, it shouldn't take long")
          const processCreated = await createProcess(key)
          const mailToUserSent = await sendProcessMailToUser(key, email)
          const mailToUsRecievd = await recieveProcessMail(key, email)
          const customerKeyDeleted = await deleteKeyFromDb(key)
 
          if (processCreated && customerKeyDeleted && mailToUsRecievd && mailToUserSent) {
            setValidationMsg('We recieved your order, check your email!')
          }
        }
    }
  }

  return (
    <Page hero={"Create an Order"}>
        <Section>
            <ol className="instruction-list">
                <li className="instruction">Look through our gallery to get an idea of the design you want 🌇</li>
                <li className="instruction">Come to our office to get a unique client key 🚗</li>
                <li className="instruction">Put the code in the input Bellow 🔑</li>
                <li className="instruction">Wait for our email ✉️</li>
            </ol>
            <form ref={formRef}>
              <input ref={keyRef} placeholder='XXXX-XXXX-XXXX'></input>
              <input ref={emailRef} placeholder='email' type="email" />
              <input ref={confirmEmailRef} placeholder='repeat email' type="email" required={true} />
              <button type='submit' onClick={(e) => handleSubmit(e)}>Verify</button>
            </form>
            {toggleVerifiedMsg && 
            <div className="verification-msg">
              {verified 
                ? <p style={{color: 'green'}}>Verified!</p>
                : <p style={{color: 'orange'}}>Wrong Key, Check Capitalization</p>
              }
            </div>
            }
            <div>{validationMsg}</div>


        </Section>
    </Page>
  )
}

export default OrderInstruction