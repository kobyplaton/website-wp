import React, { useContext, useRef, useState } from "react";
import Section from "../components/Section";
import "../styles/ContactForm.css";
import PageText from "../components/PageText";
import { NavContext } from "../context/NavContext";
import emailjs from '@emailjs/browser'


function ContactForm({dark = false , black = false}) {
  const {messageUsRef} = useContext(NavContext);
  const [emailRecievedStatusMsg, setEmailRecievedStatusMsg] = useState('');
  const [messageColor, setMessageColor] = useState()
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_FROM_USER_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then(res => {
      if (res.status === 200) {
        setEmailRecievedStatusMsg('Email Recieved!')
        setMessageColor('green')
      }
      if (res.status !== 200) {
        setEmailRecievedStatusMsg('Oops, something went wrong, try again later!')
        setMessageColor('red')
      }
      
    })
    .catch(e => console.error('Something went wrong when sending message, ', e))

  };



  return (
    <Section sectionRef={messageUsRef} black={black} dark={dark}>

    <PageText heading={'Message us and we will get back to you'} />

    <form ref={formRef} className="contact-form"
      onSubmit={(e) => handleSubmit(e)}>
      <div className="form-input">
        <input className="input"
          type="text"
          placeholder="Your name"
          name="from_name"
          required
          />
      </div>
      <div className="form-input">
        <input className="input"
          type="email"
          placeholder="Email"
          name="from_email"
          required
          />
      </div>
      <div className="form-input">
        <textarea className="textarea"
          placeholder="Your message"
          name="message"
          required
          />
      </div>
      <div className="form-input">
        <button className="form-button"
          type="submit"
          >
          Send a message
        </button>
        <div style={{color: `${messageColor}`}} className="response-message">
          {emailRecievedStatusMsg}
        </div>
      </div>
    </form>
</Section>
  );

  }

export default ContactForm;