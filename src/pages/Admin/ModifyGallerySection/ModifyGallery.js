import React, { Suspense, lazy, useEffect } from 'react'
import Gallery from '../../Gallery/Gallery'
import useSlides from '../../../components/hooks/useSlides'
import { nanoid } from 'nanoid'
import ModifyImage from './ModifyImage'
import { setDbFile } from '../../../firebase/firestore'


function ModifyGallery() {

    const slides = useSlides()

    const modifyImageInDb = (image) => {
      setDbFile('gallery_images', image.id, image)
    }


  return (
    <div className="">
      {slides.map((slide) => <ModifyImage image={slide} modifyImageInDb={modifyImageInDb} key={nanoid()} />)}
    </div>
  )
}

export default ModifyGallery