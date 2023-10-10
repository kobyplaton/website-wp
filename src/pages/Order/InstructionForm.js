import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap'
import { createProcess, deleteKeyFromDb, verifyKey } from './keyLogick'
import { recieveProcessMail, sendProcessMailToUser } from './mailLogick'

function InstructionForm({setValidationMsg, setToggleVerifiedMsg, setVerified }) {

    const {t} = useTranslation('common')
    const formRef = useRef()
    const keyRef = useRef()
    const emailRef = useRef()
    const confirmEmailRef = useRef()
    const [buttonDisabled, setButtonDisabled] = useState(true)

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

  return
}

export default InstructionForm