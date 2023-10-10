import { useWindowSize } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { nanoid } from 'nanoid'
import ElementLightbox from './ElementLightbox'

function Element({before, after}) {

  const {width} = useWindowSize()
  const [lightbox, toggleLightbox] = useState()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const handleImageClick = (index) => {
    setCurrentSlideIndex(index)
    toggleLightbox(true)
  }

  return (
    <div className='ba-element'>
      <Lightbox render={{
        slide: ({ slide }) => <ElementLightbox key={nanoid()} imageFile={slide} />
      }}
        slides={[before, after]}
        open={lightbox}
        index={currentSlideIndex}
        close={() => toggleLightbox(false)}
      />
        <img onClick={() => handleImageClick(0)} src={before} width={width / 3} alt="" />
        <div style={{height: `${width / 3}px` }} className="vertical-separator"></div>
        <img onClick={() => handleImageClick(1)} src={after} width={width / 3} alt="" />
    </div>
  )
}

export default Element