import React, { useRef, useState } from "react";
import "../styles/ContactForm.css";
import PageText from "../components/PageText";
import emailjs from '@emailjs/browser'
import { Button, Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import ContactFormLicensing from "./ContactFormLicensing";

const classesBig = 'px-5'
const classesSmall = 'px-3'

function ContactForm({dark = false , black = false}) {
  const [emailRecievedStatusMsg, setEmailRecievedStatusMsg] = useState('');
  const [messageColor, setMessageColor] = useState()
  const formRef = useRef()
  const {width} = useWindowSize()
  const {t} = useTranslation('common')

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_FROM_USER_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then(res => {
      if (res.status === 200) {
        setEmailRecievedStatusMsg(t("ContactForm.recieved"))
        setMessageColor('lime')
        formRef.current.reset()
      }
      if (res.status !== 200) {
        setEmailRecievedStatusMsg(t("ContactForm.recieved"))
        setMessageColor('red')
      }
      
    })
    .catch(e => console.error(t("ContactForm.recieved"), e))

  };



  return (
    <div className="d-flex mx-0 px-0"
    >

    <div className="contact-form-container">

    <Container fluid className="px-0">
      <Row style={{width: width > 1200 && width }} className="mx-0">
        {width > 700 && width < 1200 &&
        <Col
        md={{span: 4}}
        l={{span: 4}}
        ></Col>
        }
        <Col
        className={width > 1200 ? classesBig : classesSmall}
        md={{span: 8}} 
        xl={{span: 6}}
        >
          <PageText headingColor="white" heading={t("ContactForm.heading")} />
          <form ref={formRef} className={`contact-form ${width > 1200 ? classesBig : classesSmall}`}
            onSubmit={(e) => handleSubmit(e)}>
            <div className="form-input">
              <input className="input"
                type="text"
                placeholder={t("ContactForm.name")}
                name="from_name"
                required
                />
            </div>
            <div className="form-input">
              <input className="input"
                type="email"
                placeholder={t("ContactForm.email")}
                name="from_email"
                required
                />
            </div>
            <div className="form-input">
              <textarea className="textarea"
                placeholder={t("ContactForm.message")}
                name="message"
                required
                />
            </div>
            <div className="form-input">
              <div style={{color: `${messageColor}`}} className="response-message">
                {emailRecievedStatusMsg}
              </div>
              <Button className="form-button color-rainbow-btn mb-4"
                type="submit"
                >
                {t("ContactForm.button")}
              </Button>
            </div>
          </form>
        </Col>
         <Col
        xl={{span: 6}}
        >
        
          <ContactFormLicensing />
        </Col>
      </Row>
    </Container>

</div>
            </div>
  );

  }

export default ContactForm;