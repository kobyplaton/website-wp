import React, { useEffect, useState } from 'react'
import Page from '../../components/Page'
import '../../styles/Gallery.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { storage } from '../../firebase/firebase_config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { nanoid } from 'nanoid'
import GalleryImage from './GalleryImage'
import CustomSlide from './CustomSlide'
import { getCollectionItems } from '../../firebase/firestore'
import { getImageList, getImages } from '../../firebase/storage'
import { Container } from 'react-bootstrap'
import { useWindowSize } from '@uidotdev/usehooks'

const useImageSize = () => {
  const {width} = useWindowSize()

  if (width < 700) {
    return {width: 250, height: 250}
  } else if (width > 700 && width < 1200) {
    return {width: 400, height: 400}
  } else {
    return {width: 400, height: 400}
  }
}

function Gallery() {
  const [openLightbox, setOpenLightbox] = useState(false)
  const [imageList, setImageList] = useState([])
  const [imageDetails, setImageDetails] = useState([])
  const [slides, setSlides] = useState([])
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  
  const {width, height} = useImageSize()

  const handleImageClick = (index) => {
    setCurrentSlideIndex(index);
    setOpenLightbox(true);
  }

  useEffect(() => {
    getImageList(setImageList)
  }, [])

  useEffect(() => {
    const files = getCollectionItems()
    files.then((res) => res.forEach((doc) => setImageDetails((imageDetails) => [...imageDetails, doc.data()])))
  }, [])

  useEffect(() => {
    // console.log('imageList - ', imageList)
    // console.log('imageDetails - ', imageDetails)
    let slidesArr = [];

    for (let image of imageList) {
      for (let detail of imageDetails) {
        if (image.src.includes(detail.id)) {
          slidesArr.push({src: image.src, ...detail})
        }
      }
    }
    setSlides(slidesArr)
  }, [imageList, imageDetails])

  return (
    <Page hero={"Gallery"}>
      <div className="gallery mt-5 flex-fill flex-wrap">
        <Lightbox
          render={{
            slide: ({ slide }) => <CustomSlide slide={slide} />
          }}
          index={currentSlideIndex}
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={slides} />
        {imageList.map((image, index) => 
          <GalleryImage onClick={handleImageClick} index={index} key={nanoid()} src={image.src} width={width} height={height} />
        )}
      </div>
    </Page> 
  )
}

export default Gallery