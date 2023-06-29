import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsGlobe2} from 'react-icons/bs'
import logo from './TWPlogo_RGB.png'
import '../../styles/Nav.css'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { savePreferedLanguage } from '../../extras/localStorageFuncs'
import LangDropDown from './LangDropDown'
import { useWindowSize } from '@uidotdev/usehooks'
import MenuPc from './MenuPc'

function Nav() {
    
    const iconSize = 23;
    const [toggleMenu, setToggleMenu] = useState(false)
    const size = useWindowSize()

    
    const navigate = useNavigate()
    
    const navigateHome = () => {
        navigate('/');
    }
    
  return (
    <div className='nav'>
        <div className="nav-content">
            <div className="nav-right">
                <img onClick={navigateHome} width={100} height={50} src={logo} alt='logo' />
            </div>
            <div className="nav-left">
                <LangDropDown />
                {size.width > 700 
                ? <MenuPc />
                : <AiOutlineMenu size={iconSize} onClick={() => setToggleMenu((prev) => !prev)} />
                }
            </div>
        </div>
        {size.width < 700 &&
            <Menu showMenu={toggleMenu} toggleMenu={setToggleMenu} />
        }
    </div>
  )
}

export default Nav