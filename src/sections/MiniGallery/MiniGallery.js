import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../../styles/MiniGallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getImageList } from '../../firebase/storage';
import { nanoid } from 'nanoid'
import { useWindowSize } from '@uidotdev/usehooks'
import MiniGalleryImg from './MiniGalleryImg';

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

    const [imageList, setImageList] = React.useState([])
    const optimalLength = useImageSize()

    React.useEffect(() => {
      getImageList(setImageList)
  
  }, [])
  

  return (
    <Carousel dynamicHeight={true} centerMode={true} centerSlidePercentage={50} infiniteLoop={true} autoPlay={true} stopOnHover={true} interval={5000} showThumbs={false} transitionTime={1000} >
        {imageList.map((image) => (
           <MiniGalleryImg key={nanoid()} src={image.src} optimalLength={optimalLength} />
        ))}
    </Carousel>
  )
}

export default MiniGallery