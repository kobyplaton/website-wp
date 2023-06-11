import React, { useContext, useEffect, useRef } from 'react'
import '../styles/ContactUs.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import PageText from '../components/PageText'
import { NavContext } from '../context/NavContext'
import { redirect } from 'react-router-dom'

function ContactUs() {

    const {contactUsRef} = useContext(NavContext);
    const iconSize = 50;

  return ( 
    <div ref={contactUsRef} className="contact-us">
        <PageText heading={'Contact Us'} />

        <div className="contact-us-links">
            <div>
                <FaPhone size={iconSize} />
                <a className='link' href="tel: 288-905-541">288 905 541</a>
            </div>
            <div>
                <FaEnvelope size={iconSize} />
                <a className='link' href="mailto: somepapercompany@gamil.com" >somepapercompany@gamil.com</a>
            </div>
            <div onClick={() => window.open("https://goo.gl/maps/aYJZwcLyYTczja479", "_blank")}>
                <FaMapMarkerAlt size={iconSize} />
                <p>
                    Click to open
                    <br />
                    Rua do Outobro 25, Faro
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs