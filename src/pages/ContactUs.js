import React, { useContext, useEffect, useRef } from 'react'
import '../styles/ContactUs.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaParking, FaInstagram, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import PageText from '../components/PageText'
import { NavContext } from '../context/NavContext'
import { BiLinkExternal } from 'react-icons/bi'

function ContactUs() {

    const {contactUsRef} = useContext(NavContext);
    const iconSize = 50;

  return ( 
    <div ref={contactUsRef} className="contact-us mt-3 mb-5 pb-3">
        <PageText heading={'Contact Us'} />

        <div className="contact-us-links flex-sm-column flex-xl-row">
            {/* <div className='contact-icon' onClick={() => window.open("https://www.instagram.com/leomessi/?utm_source=ig_embed&ig_rid=84868b51-25c7-4de6-93d2-a11c1d9eccb7", "_blank")}>
                <FaInstagramSquare size={iconSize} />
                <a className='link text-black-50' target='_blank' href="https://www.instagram.com/leomessi/?utm_source=ig_embed&ig_rid=84868b51-25c7-4de6-93d2-a11c1d9eccb7">our Instagram</a>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://www.instagram.com/leomessi/?utm_source=ig_embed&ig_rid=84868b51-25c7-4de6-93d2-a11c1d9eccb7", "_blank")}>
                <FaFacebookSquare size={iconSize} />
                <a className='link text-black-50'>our Facebook</a>
            </div> */}
            <div className='contact-icon'>
                <FaEnvelope size={iconSize} />
                <a className='link text-black-50' href="mailto: somepapercompany@gamil.com" >somepapercompany@gamil.com</a>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://goo.gl/maps/aYJZwcLyYTczja479", "_blank")}>
                <FaMapMarkerAlt size={iconSize} />
                <p className='text-black-50 mb-0'>
                    Our office, Faro
                    <span className='mx-2'>
                        <BiLinkExternal />
                    </span>
                </p>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://goo.gl/maps/gz9ePMY2E9TFGJLK6", "_blank")}>
                <FaParking size={iconSize} />
                <p className='text-black-50 mb-0'>
                    Parking Near By
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