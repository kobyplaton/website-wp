import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsGlobe2} from 'react-icons/bs'
import logo from './TWPlogo_RGB.png'
import '../../styles/Nav.css'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { savePreferedLanguage } from '../../extras/localStorageFuncs'

function Nav() {
    const [t, i18n] = useTranslation('common')
    const iconSize = 23;
    const [toggleMenu, setToggleMenu] = useState(false)

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/');
    }

    const handleLangChange = () => {
        i18n.changeLanguage('en')
        savePreferedLanguage('en')
    }

  return (
    <div className='nav'>
        <div className="nav-content">
            <div className="nav-right">
                <img onClick={navigateHome} width={100} height={50} src={logo} alt='logo' />
            </div>
            <div className="nav-left">
                <BsGlobe2 size={iconSize} onClick={handleLangChange} />
                <AiOutlineMenu size={iconSize} onClick={() => setToggleMenu((prev) => !prev)} />
            </div>
        </div>
        <Menu showMenu={toggleMenu} toggleMenu={setToggleMenu} />
    </div>
  )
}

export default Nav