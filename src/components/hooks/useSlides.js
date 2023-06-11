import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { getCollectionItems } from '../../firebase/firestore'
import { storage } from '../../firebase/firebase_config'
import { getImageList } from '../../firebase/storage'

function useSlides() {
    const [slides, setSlides] = useState([])
    const [imageList, setImageList] = useState([])
    const [imageDetails, setImageDetails] = useState([])


  useEffect(() => {
    getImageList(setImageList)
  }, [])

  useEffect(() => {
    const files = getCollectionItems()
    files
    .then((res) => res.forEach((doc) => setImageDetails((imageDetails) => [...imageDetails, doc.data()])))
    .catch(e => console.error('Something went could not GET items from Images Collection in db, Check db', e))
  }, [])


  useEffect(() => {
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

  // useEffect(() => {
  //   console.log('imageList - ', imageList)
  //   console.log('imageDetails - ', imageDetails)
  //   console.log('slides - ', slides)
  // }, [imageList, imageDetails, slides])

  return slides
}

export default useSlides