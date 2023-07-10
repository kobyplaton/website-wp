import React from 'react'
import { convertImageSizes } from '../../extras/convertImageSizes'
import { nanoid } from 'nanoid'

function MiniGalleryImg({ src, optimalLength }) {
  const [convertedSizes, setConvertedSizes] = React.useState()
  const [originalSizes, setOriginalSizes] = React.useState({width: 250, height: 250})


React.useEffect(() => {
  const img = new Image()
  img.src = src
  setOriginalSizes({width: img.width, height: img.height})
},[])
React.useEffect(() => {
  setConvertedSizes(convertImageSizes(originalSizes, optimalLength))
}, [optimalLength, originalSizes])

React.useEffect(() => {
  console.log(convertedSizes)
}, [convertedSizes])
  return (
    <>
    {convertedSizes &&
    
     <div className='carousel-image-container'>

          <img style={{maxWidth: `${convertedSizes.width}px`}} width={convertedSizes.width}  height={convertedSizes.height} className='carousel-image' src={src} alt="" />
      </div>
    }
    </>
  )
}

export default MiniGalleryImg