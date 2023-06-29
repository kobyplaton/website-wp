import { useWindowSize } from '@uidotdev/usehooks'
import React, { useEffect } from 'react'

const classesHeadingBig = 'my-5 font-big pb-5 line-height-l'
const classesHeadingSmall = 'mt-5 mb-5'

const textBig = 'font-ms mb-5'
const textSmall = 'mb-5'

function PageText({children, heading, textAlign = 'center'}) {

  const size = useWindowSize()

  return (
    <div style={{textAlign}} className='page-text'>
        <div className={`page-text-heading ${size.width > 1200 ? classesHeadingBig : classesHeadingSmall}`}>{heading}</div>
        {children &&
        
          <div className={`page-text-text ${size.width > 1200 ? textBig : textSmall}`}>
            {children}
          </div>
        }
        </div>
  )
}

export default PageText




