import React, { useState } from 'react'
import '../../styles/MiniGallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getImageList } from '../../firebase/storage';
import { nanoid } from 'nanoid'
import { useWindowSize } from '@uidotdev/usehooks'
import MiniGalleryImg from './MiniGalleryImg';
import Lightbox from 'yet-another-react-lightbox'
import CustomSlide from '../../pages/Gallery/CustomSlide';
import { getCollectionItems } from '../../firebase/firestore';

const useImageSize = () => {
    const {width} = useWindowSize()
  
    if (width < 700) {
      return 250
    } else if (width > 700 && width < 1400) {
      return 400
    } else {
      return 500
    }
  }
function MiniGallery() {

    const [lightbox, toggleLightbox] = React.useState()
    const [imageList, setImageList] = React.useState([])
    const [imageDetails, setImageDetails] = React.useState([])
    const [slides, setSlides] = React.useState([])
    const optimalLength = useImageSize()
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

    const handleImageClick = (index) => {
      setCurrentSlideIndex(index)
      toggleLightbox(true)
    }

    React.useEffect(() => {
      getImageList(setImageList)
  }, [])
  
  React.useEffect(() => {
    const files = getCollectionItems()
    files.then((res) => res.forEach((doc) => setImageDetails((imageDetails) => [...imageDetails, doc.data()])))
  }, [])

  React.useEffect(() => {

    let slidesArr = [];

    for (let image of imageList) {
      for (let detail of imageDetails) {
        if (image.src.includes(detail.id)) {
          slidesArr.push({src: image.src, width: image.width, height: image.height, ...detail})
        }
      }
    }
    setSlides(slidesArr)
  }, [imageList, imageDetails])



  return (
    <>
      <div className="mini-gallery">
        <Lightbox render={{
        slide: ({ slide }) => <CustomSlide key={nanoid()} slide={slide} />
      }}
        slides={slides}
        open={lightbox}
        index={currentSlideIndex}
        close={() => toggleLightbox(false)}
         />
        {slides.map((slide, index) => (
          <div key={nanoid()} className="gallery-item-container">
            <div className='image-details'>
              {/* {slide.details} */}
            </div>
            <div className="img-box">
              <img onClick={() => handleImageClick(index)} key={nanoid()} src={slide.src} width={250} height={350}></img>
            </div>
          </div>
        ))}
      </div>
      <div className='gallery-text'>
        Come to our showroom to see over 40 wall prints!
      </div>
    </>
  )
}

export default MiniGallery