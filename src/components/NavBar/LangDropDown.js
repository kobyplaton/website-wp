import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BsGlobe2 } from 'react-icons/bs'
import { savePreferedLanguage } from '../../extras/localStorageFuncs'

function LangDropDown() {

    const [t, i18n] = useTranslation('common')

    const switchToEnglish = () => {
        i18n.changeLanguage('en')
        savePreferedLanguage('en')
    }

    const switchToPortuguese = () => {
        i18n.changeLanguage('pt')
        savePreferedLanguage('pt')
    }
    

  return (
    <Dropdown drop='none'>
        <Dropdown.Toggle 
        style={{
        all: 'unset',
        
    }}
    >
            <BsGlobe2 size={23} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={switchToEnglish}>English</Dropdown.Item>
            <Dropdown.Item onClick={switchToPortuguese}>Portuguese</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default LangDropDown