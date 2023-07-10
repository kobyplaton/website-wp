import React, { useEffect, useState } from 'react'
import { convertImageSizes } from '../../extras/convertImageSizes'
import { useTranslation } from 'react-i18next'

function GalleryImage({ src, optimalLength, onClick, index }) {

  const {t} = useTranslation('common')
  const [originalSizes, setOriginalSizes] = useState({width: 250, height: 250})
  const [convertedSizes, setConvertedSizes] = useState({width: 250, height: 250})
  const [galleryImageStyles, setGalleryImageStyles] = useState({width: 300, height: 300})


  useEffect(() => {
      if (src) {
              const image = new Image()
              image.src = src;
              image.onload = () => {
              setOriginalSizes({width: image.width, height: image.height})
              }
          
      }
  }, [src])

  useEffect(() => {
      setConvertedSizes(convertImageSizes(originalSizes, optimalLength))
    }, [originalSizes, optimalLength])
    
    useEffect(() => {
      setGalleryImageStyles({width: convertedSizes.width + 'px', height: convertedSizes.height + 'px'})
  }, [convertedSizes])


  return (
    <div
    style={galleryImageStyles}
    onClick={() => onClick(index)} className='gallery-image'>
            <div className="image-overlay-text-box">
                <div className="image-overlay-text">
                    <p>{t("Gallery.details")}</p>
                </div>
            </div>
            <img width={convertedSizes.width} height={convertedSizes.height} src={src} alt='' />
    </div>
  )
}

export default GalleryImage