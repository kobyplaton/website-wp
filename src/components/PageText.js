import React from 'react'

function PageText({children, heading}) {

  return (
    <div className='page-text'>
        <div className='page-text-heading'>{heading}</div>
        <div className='page-text-text'>
            {children}
        </div>
        </div>
  )
}

export default PageText




