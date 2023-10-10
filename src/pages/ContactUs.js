import React, { useContext } from 'react'
import '../styles/ContactUs.css'
import { FaEnvelope, FaMapMarkerAlt, FaParking, FaPhone } from 'react-icons/fa'
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
                <h3>{t('Home.ContactUs.sectionHours.heading')}</h3>
                <ul>
                    <h5>{t('Home.ContactUs.sectionHours.subheading1')}</h5>
                    <li>{t('Home.ContactUs.sectionHours.text1')}</li>
                </ul>
                <ul>
                    <h5>{t('Home.ContactUs.sectionHours.subheading2')}</h5>
                    <li>{t('Home.ContactUs.sectionHours.text2')}</li>
                </ul>
            </div>
            <div>
                <h3>{t('Home.ContactUs.sectionDemonstrations.heading')}</h3>
                <ul>{t('Home.ContactUs.sectionDemonstrations.subheading')}
                    <div><b>{t('Home.ContactUs.sectionDemonstrations.day1')}</b> {t('Home.ContactUs.sectionDemonstrations.and')} <b>{t('Home.ContactUs.sectionDemonstrations.day2')}</b></div>
                    <li><b>12pm</b> {t('Home.ContactUs.sectionDemonstrations.to')} <b>1pm</b> {t('Home.ContactUs.sectionDemonstrations.and')} <b>2pm</b> {t('Home.ContactUs.sectionDemonstrations.to')} <b>3pm</b></li>
                </ul>
            </div>
        </div>
        <div className="divider"></div>
        <div className="contact-us-links flex-sm-column flex-xl-row">
            <div className='contact-icon'>
                <FaEnvelope size={iconSize} />
                <a className='link text-black-50' href="mailto: enq@printonyourwall.pt" >enq@printonyourwall.pt</a>
            </div>
            <div className='contact-icon' onClick={() => window.open("https://goo.gl/maps/22vumTPvDr63rBCDA", "_blank")}>
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
            <div className="contact-icon" onClick={() => window.open('tel:123123123', '_self')}>
                <FaPhone size={iconSize} />
                <a className='text-black-50' href="tel:935 928 585">935 928 585</a>
            </div>
        </div>
    </div>
  )
}

export default ContactUs