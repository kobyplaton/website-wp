import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'

function Hero({ text }) {

  const size = useWindowSize()

  const classesBig = 'my-5 py-5 largest-font'
  const classesSmall = 'mt-5'

  return (
    <div className={`hero ${size.width > 1200 ? classesBig : classesSmall}`}>{text}</div>
  )
}

export default Hero