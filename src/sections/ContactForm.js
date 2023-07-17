import React, { useContext, useRef, useState } from "react";
import Section from "../components/Section";
import "../styles/ContactForm.css";
import PageText from "../components/PageText";
import { NavContext } from "../context/NavContext";
import emailjs from '@emailjs/browser'
import { Button, Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";
import img from '../styles/images/office-bkg-hq-2.png'
import { useTranslation } from "react-i18next";
import ContactFormLicensing from "./ContactFormLicensing";

const classesBig = 'px-5'
const classesSmall = 'px-3'

const ImagesIfSizeIsBig = () => {
  const {width} = useWindowSize()

  if (width > 1200) {
    return <div
    style={{overflow: 'hidden'}}
    >
        <img
         width={700} height={700} src={img} alt="" />
        {/* <img
         className="p-absolute" width={400} height={400} src={img} /> */}
      </div>
  }  
}

function ContactForm({dark = false , black = false}) {
  const {messageUsRef} = useContext(NavContext);
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
        setEmailRecievedStatusMsg(t("Home.ContactForm.recieved"))
        setMessageColor('green')
      }
      if (res.status !== 200) {
        setEmailRecievedStatusMsg(t("Home.ContactForm.recieved"))
        setMessageColor('red')
      }
      
    })
    .catch(e => console.error(t("Home.ContactForm.recieved"), e))

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
          <PageText heading={t("Home.ContactForm.heading")} />
          <form ref={formRef} className={`contact-form ${width > 1200 ? classesBig : classesSmall}`}
            onSubmit={(e) => handleSubmit(e)}>
            <div className="form-input">
              <input className="input"
                type="text"
                placeholder={t("Home.ContactForm.name")}
                name="from_name"
                required
                />
            </div>
            <div className="form-input">
              <input className="input"
                type="email"
                placeholder={t("Home.ContactForm.email")}
                name="from_email"
                required
                />
            </div>
            <div className="form-input">
              <textarea className="textarea"
                placeholder={t("Home.ContactForm.message")}
                name="message"
                required
                />
            </div>
            <div className="form-input">
              <Button className="form-button mb-4"
                type="submit"
                >
                {t("Home.ContactForm.button")}
              </Button>
              <div style={{color: `${messageColor}`}} className="response-message">
                {emailRecievedStatusMsg}
              </div>
            </div>
          </form>
        </Col>
        {width > 1200
        && <Col
        xl={{span: 6}}
        >
        
          <ContactFormLicensing />
        </Col>}
      </Row>
    </Container>

</div>
            </div>
  );

  }

export default ContactForm;