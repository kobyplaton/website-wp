import React from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import '../styles/WallPrinting.css'
import { useTranslation } from 'react-i18next'

function WallPrintingSection() {

    const {t} = useTranslation('common')

  return (
    <Section dark={true}>
        <PageText heading={t("Home.WallPrinting.heading")}>
            <div className="subsection">
                <p>{t("Home.WallPrinting.intro")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section1.heading")}</h3>
                <p>{t("Home.WallPrinting.section1.text")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section2.heading")}</h3>
                <p>{t("Home.WallPrinting.section2.text")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section3.heading")}</h3>
                <p>{t("Home.WallPrinting.section3.text")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section4.heading")}</h3>
                <p>{t("Home.WallPrinting.section4.text")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section5.heading")}</h3>
                <p>{t("Home.WallPrinting.section5.text")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section6.heading")}</h3>
                <p>{t("Home.WallPrinting.section6.text")}</p>
            </div>
            <div className="subsection">
                <h3>{t("Home.WallPrinting.section7.heading")}</h3>
                <p>{t("Home.WallPrinting.section7.text")}</p>
            </div>
            <div className="subsection">
                <p>{t("Home.WallPrinting.conclusion")}</p>
                <p>{t("Home.WallPrinting.conclusion1")}</p>
            </div>
        </PageText>
    </Section>
  )
}

export default WallPrintingSection