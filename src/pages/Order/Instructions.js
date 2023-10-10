import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/OrderInstruction.css'

function Instructions() {

    const {t} = useTranslation('common')

  return (
    <>
        <h2 className='order-subheading'>{t("Order.subheading")}</h2>
            <ol className="instruction-list d-flex flex-column ">
                <li className="instruction">{t("Order.instructions.1.heading")}
                    <ul>
                        <li>{t("Order.instructions.1.text")}</li>
                    </ul>
                </li>
                <li className="instruction">{t("Order.instructions.2.heading")}
                    <ul>
                        <li>{t("Order.instructions.2.text")}</li>
                    </ul>
                </li>
                <li className="instruction">{t("Order.instructions.3.heading")}
                    <ul>
                        <li>{t("Order.instructions.3.text")}</li>
                    </ul>
                </li>
                <li className="instruction">{t("Order.instructions.4.heading")}
                    <ul>
                        <li>{t("Order.instructions.4.text")}</li>
                    </ul>
                </li>
            </ol>
    </>
  )
}

export default Instructions