import React, { useContext, useEffect, useRef, useState } from 'react'
import '../../styles/Menu.css'
import { useNavigate, useResolvedPath } from 'react-router-dom'
import MenuLink from './MenuLink'
import { NavContext } from '../../context/NavContext'
import { useTranslation } from 'react-i18next'

function Menu({ showMenu, toggleMenu }) {

  const {aboutUsRef, contactUsRef, faqRef, messageUsRef} = useContext(NavContext)
  const currentPage = useRef()
  const resolvedPath = useResolvedPath()
  const navigate = useNavigate()
  const [section, setSection] = useState()
  const {t} = useTranslation('common')

  const directTo = (path, ref) => {
    if (currentPage.current !== getCurrentPage(path)) {
      navigate(path)
  } else if (ref) {
      setSection(ref)
      scrollTo(ref)
  } else {
      scrollTo(null, 0)
      toggleMenu(false)
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
    toggleMenu(false)
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
  }, [resolvedPath, getCurrentPage])

  useEffect(() => {
    if (section) {
      scrollTo(section)
    }
  }, [section])


  return (
    <div className={`menu ${showMenu ? 'show-nav' : 'hide'}`}>
        <div className="menu-content">
            <MenuLink path={"/home"} directTo={directTo}>
              {t("Menu.Home")}
            </MenuLink>
            <MenuLink path={"/before-and-after"} directTo={directTo}>
              {t("Menu.BaA")}
            </MenuLink>
        </div>
    </div>
  )
}

export default Menu
