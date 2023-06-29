import React, { useContext, useEffect, useRef } from 'react'
import '../styles/ContactUs.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaParking, FaInstagram, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import PageText from '../components/PageText'
import { NavContext } from '../context/NavContext'
import { BiLinkExternal } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

function ContactUs() {

    const {t} = useTranslation('common');
    const {contactUsRef} = useContext(NavContext);
    const iconSize = 50;

  return ( 
    <div ref={contactUsRef} className="contact-us mt-3 mb-5 pb-3">
        <PageText heading={t("Home.ContactUs.heading")} />

        <div className="contact-us-links flex-sm-column flex-xl-row">
            <div className='contact-icon'>
                <FaEnvelope size={iconSize} />
                <a className='link text-black-50' href="mailto: paleta.permanente.uni@outlook.com" >paleta.permanente.uni@outlook.com</a>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://goo.gl/maps/aYJZwcLyYTczja479", "_blank")}>
                <FaMapMarkerAlt size={iconSize} />
                <p className='text-black-50 mb-0'>
                    {t("Home.ContactUs.icon1")}
                    <span className='mx-2'>
                        <BiLinkExternal />
                    </span>
                </p>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://goo.gl/maps/gz9ePMY2E9TFGJLK6", "_blank")}>
                <FaParking size={iconSize} />
                <p className='text-black-50 mb-0'>
                    {t("Home.ContactUs.icon2")}
                    <span className='mx-2'>
                        <BiLinkExternal />
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs