import React from 'react'
import '../../styles/MiniGallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getImageList } from '../../firebase/storage';
import { nanoid } from 'nanoid'
import { useWindowSize } from '@uidotdev/usehooks'
import MiniGalleryImg from './MiniGalleryImg';
import Lightbox from 'yet-another-react-lightbox'
import CustomSlide from '../../pages/Gallery/CustomSlide';

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
    const optimalLength = useImageSize()

    React.useEffect(() => {
      getImageList(setImageList)
  
  }, [])
  

  return (
    <>
      <div className="mini-gallery">
        <Lightbox render={{
        slide: ({ slide }) => <CustomSlide slide={slide} />
      }}
        slides={imageList}
        open={lightbox}
        close={() => toggleLightbox(false)}
         />
        {imageList.map((image) => (
          <div className="img-box">
            <img onClick={() => toggleLightbox(true)} key={nanoid()} src={image.src} width={250} height={350}></img>
          </div>
        ))}
      </div>
      Come to our store to see over 40 more wall prints!
    </>
  )
}

export default MiniGallery