import React, { useRef, useState } from 'react'
import Page from '../../components/Page'
import Section from '../../components/Section'
import '../../styles/OrderInstruction.css'
import { createProcess, deleteKeyFromDb, verifyKey } from './keyLogick'
import { recieveProcessMail, sendProcessMailToUser } from './mailLogick'
import { Button } from 'react-bootstrap'
import PageText from '../../components/PageText'
import { useTranslation } from 'react-i18next'

function OrderInstruction() {

  const {t} = useTranslation('common')
  const [validationMsg, setValidationMsg] = useState('')
  const [verified, setVerified] = useState()
  const [toggleVerifiedMsg, setToggleVerifiedMsg] = useState()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const keyRef = useRef()
  const emailRef = useRef()
  const confirmEmailRef = useRef()
  const formRef = useRef()


  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
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
    <Page hero={t("Order.heading")}>
        <Section>
          <PageText heading={t("Order.heading")} textAlign='start'>
            <h2 className='order-subheading'>{t("Order.subheading")}</h2>
            <ol className="instruction-list d-flex flex-column ">
                <li className="instruction">{t("Order.instructions.1")} 🌇</li>
                <li className="instruction">{t("Order.instructions.5")} 🚗</li>
                <li className="instruction">{t("Order.instructions.2")} 🔑</li>
                <li className="instruction">{t("Order.instructions.3")} ✍️</li>
                <li className="instruction">{t("Order.instructions.4")} ✉️</li>
            </ol>
          </PageText>
            <form ref={formRef} className='d-flex flex-column mt-5'>
              <div className="form-group mb-3">
                <label for="keyInput">{t("Order.form.key")}</label>
                <input className='form-control' ref={keyRef} name='keyInput' placeholder='XXXX-XXXX-XXXX'></input>
              </div>
              <div className="form-group mb-3">
                <label for="email">{t("Order.form.email")}</label>
                <input className='form-control' ref={emailRef} name='email' placeholder='email' type="email" />
                <small id="emailHelp" class="form-text text-muted">{t("Order.form.emailMsg")}</small>
              </div>
              <div className="form-group mb-3">
                <label for="emailRepeat">{t("Order.form.repeatEmail")}</label>
                <input className='form-control' ref={confirmEmailRef} name='emailRepeat' placeholder='repeat email' type="email" required={true} />
              </div>
              <div className="form-group mb-3">
                  <label for='checkbox'>
                    <input onChange={handleCheckboxChange} style={{marginRight: '8px'}} type="checkbox" name='checkbox' />
                    {t("Order.form.checkbox")}
                  </label>
              </div>
              <div className="form-group mb-3">
                <Button disabled={buttonDisabled} type='submit' onClick={(e) => handleSubmit(e)}>{t("Order.form.button")}</Button>
              </div>
            </form>
            {toggleVerifiedMsg && 
            <div className="verification-msg mb-5">
              {verified 
                ? <p style={{color: 'green'}}>Verified!</p>
                : <p style={{color: 'orange'}}>Wrong Key, Check Capitalization</p>
              }
            </div>
            }
            <div style={{minHeight:'100px'}}>{validationMsg}</div>


        </Section>
    </Page>
  )
}

export default OrderInstruction