import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BsGlobe2 } from 'react-icons/bs'
import { savePreferedLanguage } from '../../extras/localStorageFuncs'

function LangDropDown() {

    const [engToggle, setEngToggle] = useState()

    const [t, i18n] = useTranslation('common')

    const switchToEnglish = () => {
        i18n.changeLanguage('en')
        savePreferedLanguage('en')
    }

    const switchToPortuguese = () => {
        i18n.changeLanguage('pt')
        savePreferedLanguage('pt')
    }
    
    useEffect(() => {
        if (i18n.language == 'en') {
            setEngToggle(true)
        } else {
            setEngToggle(false)
        }

    }, [i18n.language])

  return (
   <div className='nav-lang'>
    <div onClick={switchToEnglish} className={`lang-el ${engToggle && 'lang-chosen'}`}>EN</div>
    <div className="vertical-line"></div>
    <div onClick={switchToPortuguese} className={`lang-el ${!engToggle && 'lang-chosen'}`}>PT</div>
   </div>
  )
}

export default LangDropDown