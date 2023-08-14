import React from 'react'
import img from '../styles/images/TradeMark ™ White.png'
import logo from '../styles/images/logo.png'
import '../styles/ContactFormLicensing.css'

function ContactFormLicensing() {
  return (
    <div className='licensing'>
        <div className="trademark-content">
            <img className='trademark-img' src={img} alt="Printonyourwall™" width={500} />
            <div className="trademark-text">is a Registered Portuguese Trade Mark 699676 </div>
            <div className="trademark-text">owned by Paleta Permanente LDA</div>
        </div>
        <div className="card-info">
            <img src={logo} alt="logo" width={200} />
            <div>Paleta Permanente LDA</div>
            <div>Rua Rebelo Da Silva 14</div>
            <div className="">8000-418 Faro</div>
        </div>
    </div>
  )
}

export default ContactFormLicensing