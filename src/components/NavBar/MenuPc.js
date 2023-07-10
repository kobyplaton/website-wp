import React, { useContext, useEffect, useRef, useState } from 'react'
import '../../styles/Menu.css'
import {  NavLink, useNavigate, useResolvedPath } from 'react-router-dom'
import { NavContext } from '../../context/NavContext'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'

function MenuPc() {

  const {aboutUsRef, contactUsRef, faqRef, messageUsRef} = useContext(NavContext)
  const currentPage = useRef()
  const resolvedPath = useResolvedPath()
  const navigate = useNavigate()
  const [section, setSection] = useState()

  const directTo = (path, ref) => {
    if (currentPage.current !== getCurrentPage(path)) {
      navigate(path)
  } else if (ref) {
      setSection(ref)
      scrollTo(ref)
  } else {
      scrollTo(null, 0)
    }
}

  const getCurrentPage = (path) => {
    const page = getPathItems(path, 1)
    if (page === '') return 'home'
    return page
  }

  const getPathItems = (path, pathItemIndex) => {
    const pathItems = path.trim().split('/');
    return pathItems[pathItemIndex];
  }

  const scrollTo = (ref, y, behavior = 'smooth') => {
    if (ref) {
      ref.current.scrollIntoView({behavior})
    } else if (typeof y === 'number') {
      window.scrollTo({
        top: y,
        behavior
      })
    }
  }

  const scrollAuto = (path) => {
    const section = getPathItems(path, 2)
    switch (section) {
      case "about-us":
        scrollTo(aboutUsRef, null, 'instant')
        break;
      case "contact-us":
        scrollTo(contactUsRef, null, 'instant')
        break;
      case "faq":
        scrollTo(faqRef, null, 'instant')
        break;
      case "message-us":
        scrollTo(messageUsRef, null, 'instant')
        break;
      default:
        scrollTo(null, 0, 'instant')
        break;
    }
  }

  useEffect(() => {
    currentPage.current = getCurrentPage(resolvedPath.pathname);
    scrollAuto(resolvedPath.pathname)
  }, [resolvedPath])

  useEffect(() => {
    if (section) {
      scrollTo(section)
    }
  }, [section])


  return (
    <Dropdown>
        <Dropdown.Toggle>
            <AiOutlineMenu />
        </Dropdown.Toggle>
        <Dropdown.Menu className='menu-pc'>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/home")}>
                Home
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/home/faq", faqRef)}>
                FAQ
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/home/contact-us", contactUsRef)}>
                Contact Us
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/home/about-us", aboutUsRef)}>
                About Us
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/home/message-us", messageUsRef)} path={"/home/message-us"} >
                Message Us
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/gallery")}>
                Gallery
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink className={'menu-pc-link'} onClick={() => directTo("/become-our-client")}>
                Become Our Client
                </NavLink>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default MenuPc
