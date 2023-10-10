import { useWindowSize } from '@uidotdev/usehooks'
import React, { useEffect, useState } from 'react'
import { convertImageSizes } from '../../extras/convertImageSizes'

const useSlideSize = () => {
    const {width} = useWindowSize()
  
    if (width < 700) {
      return 350
    } else if (width > 1200) {
      return 500
    } else {
      return 600
    }
  }

function ElementLightbox({ imageFile }) {
    const [originalSizes, setOriginalSizes] = useState({width: 250, height: 250})
    const [convertedSizes, setConvertedSizes] = useState({width: 250, height: 250})
    const size = useSlideSize()

    useEffect(() => {
        if (imageFile) {
            const image = new Image()
            image.src = imageFile;
            image.onload = () => {
            setOriginalSizes({width: image.width, height: image.height})
            }
        }
    }, [imageFile])

    useEffect(() => {
        setConvertedSizes(convertImageSizes(originalSizes, size))
      }, [originalSizes, size])


  return (
    <div>
        <img src={imageFile} width={convertedSizes.width} height={convertedSizes.height} alt="" />
    </div>
  )
}

export default ElementLightbox