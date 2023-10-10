import React from 'react'
import '../../styles/MiniGallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getImageList } from '../../firebase/storage';
import { nanoid } from 'nanoid'
import Lightbox from 'yet-another-react-lightbox'
import CustomSlide from '../../pages/Gallery/CustomSlide';
import { getCollectionItems } from '../../firebase/firestore';
import { useTranslation } from 'react-i18next';

function MiniGallery() {

    const [lightbox, toggleLightbox] = React.useState()
    const [imageList, setImageList] = React.useState([])
    const [imageDetails, setImageDetails] = React.useState([])
    const [slides, setSlides] = React.useState([])
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    const {t} = useTranslation('common')

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
            <div className="img-box">
              <img style={{backgroundColor: 'white'}} onClick={() => handleImageClick(index)} alt='' key={nanoid()} src={slide.src} height={350}></img>
            </div>
          </div>
        ))}
      </div>
      <div className='gallery-text'>
        {t('Home.MiniGallery.text')}
      </div>
    </>
  )
}

export default MiniGallery