import React, { useContext } from 'react'
import '../styles/ContactUs.css'
import { FaEnvelope, FaMapMarkerAlt, FaParking } from 'react-icons/fa'
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
        <div className="contact-us-center-container">
            <div>
                <h3>Opening hours</h3>
                <ul>
                    <h5>Monday to Friday</h5>
                    <li>By Appointment Only</li>
                </ul>
                <ul>
                    <h5>Saturday and Sunday</h5>
                    <li>10:00 - 16:00</li>
                </ul>
            </div>
            <div>
                <h3>Live demonstrations</h3>
                <ul>Printing live demonstrations:
                    <div><b>Saturday</b> and <b>Sunday</b></div>
                    <li><b>12pm</b> to <b>1pm</b> and <b>2pm</b> to <b>3pm</b></li>
                </ul>
            </div>
        </div>
        <div className="divider"></div>
        <div className="contact-us-links flex-sm-column flex-xl-row">
            <div className='contact-icon'>
                <FaEnvelope size={iconSize} />
                <a className='link text-black-50' href="mailto: enq@printonyourwall.pt" >paleta.permanente.uni@outlook.com</a>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://goo.gl/maps/sYr2ftsyTo6Bctme8", "_blank")}>
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