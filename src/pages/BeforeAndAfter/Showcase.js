import React from 'react'
import '../../styles/BeforeAndAfter.css'
import Element from './Element'
import { useTranslation } from 'react-i18next';

function Showcase({type, pairings}) {

    const {t} = useTranslation('common')

    let heading;
    switch (type) {
        case 'commercial':
            heading = t("BaA.commercial")
            break;
        case 'domestic':
            heading = t("BaA.domestic")
            break;
        default:
            heading = t("BaA.commercial")
            break;
    }

  return (
    <div className='showcase'>
        <header className='showcase-heading'>{heading}</header>
        <div className="ba-headings-container">
            <header className="before-header ba-header">{t("BaA.before")}</header>
            <div className="vertical-separator-50"></div>
            <header className="after-header ba-header">{t("BaA.after")}</header>
        </div>
        <section className="ba-elements-container">
            {pairings.map((pair, id) => <Element before={pair.beforeFile} after={pair.afterFile} key={id} />)}
        </section>
    </div>
  )
}

export default Showcase