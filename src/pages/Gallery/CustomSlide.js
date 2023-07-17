import { useWindowSize } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react'
import { convertImageSizes } from '../../extras/convertImageSizes';
import { useTranslation } from 'react-i18next';

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

function CustomSlide({ slide }) {
  const {src, details, title, width, height, price} = slide;
  const size = useSlideSize()

  const {t} = useTranslation('common')
  const [originalSizes, setOriginalSizes] = useState({width: 250, height: 250})
  const [convertedSizes, setConvertedSizes] = useState({width: 250, height: 250})

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
    setConvertedSizes(convertImageSizes(originalSizes, size))
  }, [originalSizes, size])
  



  return (
    <div className='custom-slide'>
      <img src={src} width={convertedSizes.width} height={convertedSizes.height} alt='' />
      {/* <div style={{color: 'white'}}>{t("Gallery.lightbox.title")} {title}</div>
      <div style={{color: 'white'}}>{t("Gallery.lightbox.width")} {width}</div>
      <div style={{color: 'white'}}>{t("Gallery.lightbox.height")} {height}</div>
      <div style={{color: 'white'}}>{t("Gallery.lightbox.price")} {price}</div>
      <div style={{color: 'white'}}>{t("Gallery.lightbox.details")} {details}</div> */}
    </div>
  )
}

export default CustomSlide