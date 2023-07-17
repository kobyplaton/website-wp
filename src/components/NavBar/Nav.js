import React, { useState } from 'react'
import logo from '../../styles/images/logo.png'
import '../../styles/Nav.css'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import LangDropDown from './LangDropDown'
import { useWindowSize } from '@uidotdev/usehooks'

function Nav() {
    
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
                {/* <img onClick={navigateHome} width={50} height={50} src={logo} alt='logo' /> */}
            </div>
            <div className="nav-left">
                <LangDropDown />
                {/* {size.width > 700 
                ? <MenuPc />
                : <AiOutlineMenu size={iconSize} onClick={() => setToggleMenu((prev) => !prev)} />
                } */}
            </div>
        </div>
        {size.width < 700 &&
            <Menu showMenu={toggleMenu} toggleMenu={setToggleMenu} />
        }
    </div>
  )
}

export default Nav