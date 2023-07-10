import React from 'react'
import useSlides from '../../../components/hooks/useSlides'
import { nanoid } from 'nanoid'
import ModifyImage from './ModifyImage'
import { setDbFile } from '../../../firebase/firestore'


function ModifyGallery() {

    const [slides, setSlides] = useSlides()

    const modifyImageInDb = (image) => {
      const fileUpdated = setDbFile('gallery_images', image.id, image)
      if (fileUpdated) {
        alert("Image Updated")
      } else {
        alert("Something went Wrong!")
      }
    }


  return (
    <div className="">
      {slides.map((slide) => <ModifyImage setSlides={setSlides} image={slide} modifyImageInDb={modifyImageInDb} key={nanoid()} />)}
    </div>
  )
}

export default ModifyGallery